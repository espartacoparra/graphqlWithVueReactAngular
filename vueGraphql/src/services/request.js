import Vue from 'vue'
//import queries from '../queries/queries'
export default new class RequestService {
 constructor() {
  this.api = "http://localhost:4000/graphqljson"
 }
 async getUsers(query) {
  return (await Vue.axios.post(this.api, query)).data
 }
}