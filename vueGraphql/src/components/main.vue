<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>Query para todos los usuarios dinamica</h4>
    <simpleRequest :queryAllUsers="queryAllUsers" :users="users" v-on:el-evento="getUsers($event)" />
    <h4>Query para un usuarios por id dinamica</h4>
    <simpleRequest :queryAllUsers="user" :users="oneUser" v-on:el-evento="getUser($event)" />
    <h4>Query para todos los usuarios dinamica filtrado por Pais</h4>
    <simpleRequest
      :queryAllUsers="getUsersByCountry"
      :users="userByCountry"
      @el-evento="getUsersByCountryRequest($event)"
    />
  </div>
</template>

<script>
import simpleRequest from "./subcomponents/simplerequest";
import RequestService from "../services/request";
import queries from "../queries/queries";
export default {
  name: "Main",
  components: {
    simpleRequest
  },
  props: {
    msg: String
  },
  created() {
    this.getUsers();
    this.getUser();
    this.getUsersByCountryRequest();
  },
  data() {
    return {
      queryAllUsers: queries.allUsers,
      user: queries.user,
      getUsersByCountry: queries.getUsersByCountry,
      userByCountry: [],
      oneUser: [],
      users: []
    };
  },
  methods: {
    async getUsers(query = this.queryAllUsers) {
      this.users = await RequestService.getUsers({ query: query });
    },
    async getUser(query = this.user) {
      this.oneUser = await RequestService.getUsers({ query: query });
    },
    async getUsersByCountryRequest(query = this.getUsersByCountry) {
      this.userByCountry = await RequestService.getUsers({ query: query });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
