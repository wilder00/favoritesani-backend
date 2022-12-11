const mysql = require('mysql2');
const {
  DB_HOST: dbHost,
  DB_PORT: dbPort,
  DB_USER: dbUser,
  DB_NAME: dbName,
  DB_PASSWORD: dbPassword,
} = process.env
const connection = mysql.createConnection({
  host     : dbHost,
  port     : dbPort,
  user     : dbUser,
  database : dbName,
  password : dbPassword,
});
// const dbPassword = process.env.DB_PASSWORD
connection.connect(function(err) {
  if (err) {
    console.error('error connecting Mysql: ' + err.stack);
    return;
  }

  console.log('connected Mysql as id ' + connection.threadId);
});

module.exports = {
  connection
}