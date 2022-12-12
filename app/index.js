
const express = require('express')
const { expressMiddleware } = require('@apollo/server/express4')
const cors = require('cors')
const app = express()
const routes = require('./routes')

module.exports.appConfig = (config)=>{
  const { apolloServer } = config || {}
  app.use(cors('*'))
  app.use(express.json())
  app.use('/api', routes)
  //app.use('/graphql', graphqlConnection)
  return app
} 


module.exports.appUseGraphQl = (app, apolloServer)=>{
  app.use('/graphql',
    expressMiddleware( apolloServer, /* { context: async ({ req }) => ({ token: req.headers.token }),} */),
  );
}