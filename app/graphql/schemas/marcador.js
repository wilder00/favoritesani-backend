
const { marcador } = require('../../models')


const marcadorTypes = `
  type Marcador {
    id: Int
    nombre: String
    marcador_padre: Int
  },

  extend type Query {
      #marcador(id: Int!): Marcador
      marcadores: [Marcador]
  }
`


const marcadorResolvers = {
  marcadores : async()=>{
    return await marcador.getAll()
  }
}

module.exports = {
  marcadorTypes,
  marcadorResolvers
}