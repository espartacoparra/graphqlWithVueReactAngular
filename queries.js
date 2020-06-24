module.exports = {
 allUsers: `query allUsers{
  allUsers{
    id
    name
    latsName
    cedula
    country
    post {
      id
      user_id
      title
    }
  }
}`,
 getUsersByCountry: `query {
 usersByCountry(country:"Venezuela"){
 id
   name
   latsName
   cedula
   country
   post {
     id
     user_id
     title
   }
 }
}`,
 user: `query {
 user(id:2){
 id
   name
   latsName
   cedula
   country
   post {
     id
     user_id
     title
   }
 }
}`
}