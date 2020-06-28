import QueryRequest from '../src/components/queries/Query'
import queries from '../src/components/queries/queries'

export default function IndexPage() {
  const [queryGetAllUsers, setQueryGetAllUsers] = React.useState(queries.allUsers)
  const [queryGetOneUser, setQueryGetOneUser] = React.useState(queries.user)
  const [queryGetUsersByCountry, setQueryGetUsersByCountry] = React.useState(queries.getUsersByCountry)
  // const [userList, setUserList] = React.useState([])

  const onChange = (event, type) => {
    if (type === "queryGetAllUsers") {
      setQueryGetAllUsers(event.target.value)
    } else if (type === "queryGetOneUser") {
      setQueryGetOneUser(event.target.value)
    } else if (type === "queryGetUsersByCountry") {
      setQueryGetUsersByCountry(event.target.value)
    }
  }

  return (<>
    <h5>Query para todos los usuarios dinamica</h5>
    <QueryRequest onChange={onChange} type={'queryGetAllUsers'} queryGet={queryGetAllUsers} />
    <h5>Query para un usuario dinamica</h5>
    <QueryRequest onChange={onChange} type={'queryGetOneUser'} queryGet={queryGetOneUser} />
    <h5>Query para todos los usuarios dinamica filtrado por Pais
        Consulta</h5>
    <QueryRequest onChange={onChange} type={'queryGetUsersByCountry'} queryGet={queryGetUsersByCountry} />
  </>
  )
}

