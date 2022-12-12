const marcador = require('./marcador')
const contenido = require('./contenido')
const { gql } = require('graphql-tag') //vscode extensión:  orsenkucher.vscode-graphql



const rootTypeDefs = gql`
  type Query {
    test: String
  }

  type Mutation {
    test: String
  }
`
const rootResolver = {
  Query: {
    test: ()=> 'test respuesta'
  }
}


const typeDefs = [
  rootTypeDefs,
  marcador.typeDefs,
]


const resolvers = [
  rootResolver,
  marcador.resolver
]

// const resolvers = {
//   ...marcador.marcadorResolvers,
//   ...contenido.contenidoResolvers,
// }

module.exports = {
  typeDefs,
  resolvers,
}