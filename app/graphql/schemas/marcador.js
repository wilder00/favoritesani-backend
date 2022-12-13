
const { marcador } = require('../../models')
const { gql } = require('graphql-tag')

const typeDefs = gql`
  type Marcador {
    id: ID
    nombre: String
    marcador_padre: Int
  },

  extend type Query {
    marcador(id: ID!): Marcador
    marcadores: [Marcador]
  }

  extend type Mutation{
    crearMarcador( 
      nombre: String,
      marcador_padre: Int
    ): Marcador
  }
`


const resolver = {
  Query:{
    marcador : async ( _ , { id } )=>{
      return await marcador.findById(id)
    },
    marcadores : async()=>{
      return await marcador.getAll()
    }
  },
  Mutation:{
    // (parent, args))
    crearMarcador: async (_, {nombre, marcador_padre})=>{
      const newMarcadorId = await marcador.createOne({
        nombre,
        marcador_padre,
      })

      const newMarcador = await marcador.findById(newMarcadorId)

      return newMarcador
    }
  }
}

module.exports = {
  typeDefs,
  resolver
}