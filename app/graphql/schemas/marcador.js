
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
    crearMarcador( name: String ): String
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
    crearMarcador:(_, {name})=>{
      return name
    }
  }
}

module.exports = {
  typeDefs,
  resolver
}