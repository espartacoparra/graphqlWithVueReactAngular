
import axios from 'axios';
class Requests {
 constructor() {
  this.api = `http://localhost:4000/graphqljson`
 }
 async getUsers(query) {
  return (await (axios.post(this.api, query))).data
 }
}

export default new Requests();