module.exports = {
   schema: `
 type Query{
  allUsers:[User]
  user(id:Int!):User
  usersByCountry(country:String):[User]
  allSeries:[[Series]]
 }
 type User{
    id:Int
    name: String
    latsName:  String
    cedula:  String
    phone:  String
    address:  String
    country:  String
    series:[Series]
 }
 
 type Series{
  id: Int
  user_id: Int
  title: String
  details:Details
 }

 type Details{
      duracion: String
      director: String
 }
 `
}