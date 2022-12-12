require('dotenv').config()
const http = require('http')
const { appConfig, appUseGraphQl } = require('./app')
const { apolloServerConfig } = require('./app/graphql')
const port = process.env.PORT || 3000
const database = require('./config/db.config')

const app = appConfig()
const httpServer = http.createServer(app);
const apolloServer = apolloServerConfig({httpServer})

apolloServer.start().then(()=>{ 
  appUseGraphQl(app, apolloServer)
})

app.listen({ port }, ()=>{
  console.log(`Escuchando en el puerto ${port}`)
  console.log(`🚀 Server Graph1l ready at http://localhost:${port}/graphql`)
})










// const { ApolloServer } = require('@apollo/server')
// const { expressMiddleware } = require('@apollo/server/express4')

// const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer')

// const express = require('express')
// const http = require('http')

// const httpServer = http.createServer(app);


// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
// });

// await server.start();


// app.use(
//   '/',
//   cors(),
//   bodyParser.json(),
//   expressMiddleware(server, {
//     context: async ({ req }) => ({ token: req.headers.token }),
//   }),
// );

// await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

// console.log(`🚀 Server ready at http://localhost:4000/`);