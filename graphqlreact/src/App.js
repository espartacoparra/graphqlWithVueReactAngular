import React from 'react';
import './App.css';

import Query from './components/query'
import Requests from './services/request'
import queries from './queries/queries'


class App extends React.Component {
  state = {
    queryGetAllUsers: queries.allUsers,
    userList: [],
    queryGetOneUser: queries.user,
    user: [],
    queryGetUsersByCountry: queries.getUsersByCountry,
    userListByCountry: [],
  }
  onChange = (event, type) => {
    if (type === "queryGetAllUsers") {
      this.setState({ queryGetAllUsers: event.target.value })
    } else if (type === "queryGetOneUser") {
      this.setState({ queryGetOneUser: event.target.value })
    } else if (type === "queryGetUsersByCountry") {
      this.setState({ queryGetUsersByCountry: event.target.value })
    }
  }
  getUsers = () => {
    Requests.getUsers({ query: this.state.queryGetAllUsers }).then(data => {
      this.setState({ userList: data.allUsers })
    })
  }
  getUser = () => {
    Requests.getUsers({ query: this.state.queryGetOneUser }).then(data => {
      this.setState({ user: data.user })
    })
  }
  getUsersByCountryRequest = () => {
    Requests.getUsers({ query: this.state.queryGetUsersByCountry }).then(data => {
      this.setState({ userListByCountry: data.usersByCountry })
    })
  }
  componentDidMount() {
    this.getUsers();
    this.getUser();
    this.getUsersByCountryRequest();
  }
  render() {
    return (
      < div className="App" >
        <br />
        <h1>Welcome to Your REact.js and GraphQL</h1>
        <h5>Query para todos los usuarios dinamica</h5>
        <Query onChange={this.onChange} type={'queryGetAllUsers'} getUsers={this.getUsers} queryGetAllUsers={this.state.queryGetAllUsers} userList={this.state.userList} ></Query>
        <h5>Query para un usuario dinamica</h5>
        <Query onChange={this.onChange} type={'queryGetOneUser'} getUsers={this.getUser} queryGetAllUsers={this.state.queryGetOneUser} userList={this.state.user} ></Query>
        <h5>Query para todos los usuarios dinamica filtrado por Pais
        Consulta</h5>
        <Query onChange={this.onChange} type={'queryGetUsersByCountry'} getUsers={this.getUsersByCountryRequest} queryGetAllUsers={this.state.queryGetUsersByCountry} userList={this.state.userListByCountry} ></Query>

      </div >
    )
  }
}

export default App;
