
const { graphqlHTTP } = require('express-graphql');
const { schemas , resolvers} = require('./schemas')

const useGraphiql = process.env.GRAPHQL_UI && JSON.parse(process.env.GRAPHQL_UI)

const graphqlConnection = graphqlHTTP({
  schema: schemas,
  rootValue: resolvers,
  graphiql: useGraphiql,

})

module.exports = {
  graphqlConnection
}