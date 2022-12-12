
const { contenido } = require('../../models')


const contenidoTypes = `
  type Contenido {
    id: Int
    nombre: String
    url: String
    marcador: Int
    descripcion: String
  },

  extend type Query {
      #marcador(id: Int!): Marcador
      contenidos: [Contenido]
  }
`


const contenidoResolvers = {
  contenidos : async()=>{
    return await contenido.getAll()
  }
}

module.exports = {
  contenidoTypes,
  contenidoResolvers
}