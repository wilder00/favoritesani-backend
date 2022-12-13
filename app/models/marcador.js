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

/* SQL TEMPLATE LITERAL danedavid.vscode-sql-template-literal-comment */
const getAll = async () => {
  const query = `/* SQL */
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

const findById = async ( id ) => {
  const query = `/* SQL */
    SELECT * from marcadores
    where id = ?
  `
  try {
    const dbResponse = await db.execute(query, [ id ])
    console.log(dbResponse);
    return dbResponse.results[0] || null
  } catch (error) {
    throw error
  }
}

const createOne = async ( marcador )=>{
  const {
    nombre,
    marcador_padre
  } = marcador 
  const values = [nombre, marcador_padre]
  const query = `/* SQL */
    INSERT INTO marcadores ( nombre, marcador_padre) 
    VALUES ( ?, ? );
  `
  try {
    const dbResponse = await db.execute(query, values)
    console.log(dbResponse);
    return dbResponse.results.insertId || null
  } catch (error) {
    console.error(error);
    throw error
  }

}

module.exports = {
  definition,
  getAll,
  findById,
  createOne
}