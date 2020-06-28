export default {
 allUsers: `query {
  allUsers{
    id
    name
    latsName
    cedula
    country
    series {
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
   series {
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
   series {
     id
     user_id
     title
   }
 }
}`
}