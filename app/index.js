
const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes')
const { graphqlConnection } = require('./graphql')

app.use(cors('*'))
app.use(express.json())
app.use('/api', routes)
app.use('/graphql', graphqlConnection)

module.exports = app