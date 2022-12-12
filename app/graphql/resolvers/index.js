
const resolvers = {
  Query:{
    hello: ()=>{
      return 'Hello World with GraphQl'
    },
    greet: ()=>{
      return 'saludos de mi parte'
    }
  },

}


module.exports = {
  resolvers
}