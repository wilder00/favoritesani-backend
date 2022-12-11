
// const dbPassword = process.env.DB_PASSWORD

const dbConnection = async () =>{
  try{
    
    console.log("test db config");
  }catch(error){
    console.log(error);
    throw new Error("error a la hora de inicializar db")
  }
}

module.exports = {
  dbConnection
}