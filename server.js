require('dotenv').config()
const app = require('./app')
const port = process.env.PORT || 3000
const database = require('./config/db.config')

database.dbConnection().catch((error)=>{console.log(error)})

app.listen(port, ()=>{
  console.log(`Escuchando en el puerto ${port}`)
})