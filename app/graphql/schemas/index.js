const marcador = require('./marcador')
const contenido = require('./contenido')
const { buildSchema } = require('graphql');


const rootType = `
  type Query {
    test: String
  }`


const types = [
  rootType,
  marcador.marcadorTypes,
  contenido.contenidoTypes,
].join(', ')
const schemas = buildSchema(types);

// const resolvers = [
//   marcador.marcadorResolvers,
// ]

const resolvers = {
  ...marcador.marcadorResolvers,
  ...contenido.contenidoResolvers,
}

module.exports = {
  schemas,
  resolvers,
}