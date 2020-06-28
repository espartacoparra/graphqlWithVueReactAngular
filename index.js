const espress = require('express')
const graphqlHTTP = require('express-graphql')
const { graphql, buildSchema } = require('graphql')
const { users } = require('./data.json')
const schem = require('./schema.js').schema
const bodyParser = require('body-parser')
const app = espress()
var cors = require('cors')
app.use(cors())

app.use(bodyParser.json())
const schema = buildSchema(schem)

let getUser = (args) => {
   let id = args.id
   return users.filter(user => { return user.id == id })[0]
}
let getUsersByCountries = (args) => {
   let country = args.country
   if (country) {
      return users.filter(user => user.country == country)
   } else {
      return users
   }
}

let getAllSeries = () => {
   return users.map(user => {
      return user.series
   })
}

const root = {
   allUsers: users,
   user: getUser,
   usersByCountry: getUsersByCountries,
   allSeries: getAllSeries
}

app.use('/graphql', graphqlHTTP({
   schema: schema,
   rootValue: root,
   graphiql: true
}))


app.post('/graphqljson', async (req, res) => {
   const { query } = req.body;
   return res.json((await (graphql(schema, query, root))).data)
}
)

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
