const db = require('../../config/db.config')

const definition = {
  tableName : 'marcadores',
  alias : 'marc',
  fields: [
    'id', 
    'nombre', 
    'marcador_padre'
  ]
}


const getAll = async () => {
  const query = `
    SELECT * from marcadores
  `
  try {
    const dbResponse = await db.execute(query)
    console.log(dbResponse);
    return dbResponse.results
  } catch (error) {
    throw error
  }
}


module.exports = {
  definition,
  getAll
}