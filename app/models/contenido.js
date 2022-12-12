const db = require('../../config/db.config')

const definition = {
  tableName : 'contenidos',
  alias : 'cont ',
  fields: [
    'id', 
    'nombre', 
    'url',
    'marcador',
    'descripcion',
  ]
}


const getAll = async () => {
  const query = `
    SELECT * from contenidos
  `
  try {
    const dbResponse = await db.execute(query)
    return dbResponse.results
  } catch (error) {
    throw error
  }
}


module.exports = {
  definition,
  getAll
}