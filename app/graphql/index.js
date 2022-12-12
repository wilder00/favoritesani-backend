
const { ApolloServer } = require('@apollo/server')
const { gql } = require('graphql-tag')
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer')

const { typeDefs , resolvers} = require('./schemas')

const useGraphiql = process.env.GRAPHQL_UI && JSON.parse(process.env.GRAPHQL_UI)

// const graphqlConnection = graphqlHTTP({
//   schema: schemas,
//   rootValue: resolvers,
//   graphiql: useGraphiql,

// })


module.exports.apolloServerConfig = (config)=>{
  const { httpServer } = config || {}

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  return apolloServer
}