const mysql = require('mysql2');
const {
  DB_HOST: dbHost,
  DB_PORT: dbPort,
  DB_USER: dbUser,
  DB_NAME: dbName,
  DB_PASSWORD: dbPassword,
} = process.env

const connectionConfig = {
  host     : dbHost,
  port     : dbPort,
  user     : dbUser,
  database : dbName,
  password : dbPassword,
}

const connection = mysql.createConnection(connectionConfig);

const execute = (query, values)=>{
  return new Promise((resolve, reject)=>{
    
    connection.execute(query, values, (error,results, fields)=>{
        if(error) reject(error);
        resolve({results, fields})
      }
    );
  })
}


module.exports = {
  execute
}