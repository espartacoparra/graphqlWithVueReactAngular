import { Component, OnInit } from '@angular/core';
import { RequestsService } from "./services/requests.service";
import query from "./queries/queries";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angularGraphql';
  queryAllUsers = query.allUsers;
  user = query.user;
  getUsersByCountry = query.getUsersByCountry;
  userByCountry;
  oneUser;
  users;

  constructor(private request: RequestsService) { }
  ngOnInit(): void {
    this.getUsers()
    this.getUser()
    this.getUsersByCounty()
  }
  getUsers(query = this.queryAllUsers) {
    this.request.getUsers({ query: query }).subscribe(data => {
      if (data == null) {
        this.users = "error en la consulta"
      } else {
        this.users = JSON.stringify(data.allUsers, null, 2)
      }
    })
  }
  getUser(query = this.user) {
    this.request.getUsers({ query: query }).subscribe(data => {
      if (data == null) {
        this.oneUser = "error en la consulta"
      } else {
        this.oneUser = JSON.stringify(data.user, null, 2)
      }
    })
  }
  getUsersByCounty(query = this.getUsersByCountry) {
    this.request.getUsers({ query: query }).subscribe(data => {
      if (data == null) {
        this.userByCountry = "error en la consulta"
      } else {
        this.userByCountry = JSON.stringify(data.usersByCountry, null, 2)
      }
    })
  }
}
