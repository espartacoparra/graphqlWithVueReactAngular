<template>
  <div>
    <div class="row mt-4">
      <div class="col-2">
        <h4>Consulta</h4>
        <pre>{{allUsers}}</pre>
      </div>
      <div class="col-4">
        <h4>Edita tu Consulta</h4>
        <label>
          <textarea v-model="allUsers" id="text" cols="40" rows="20"></textarea>
        </label>
      </div>
      <div class="col-4">
        <pre>{{userList}}</pre>
      </div>
      <div class="col-2">
        <br />
        <br />
        <br />
        <button class="btn btn-secondary" v-on:click="$emit('el-evento', allUsers)">Ejecutar query</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "simpleRequest",
  props: {
    queryAllUsers: String,
    users: { Array }
  },
  watch: {
    users: function() {
      this.setUserList();
    }
  },
  data() {
    return {
      allUsers: this.queryAllUsers,
      userList: this.users
    };
  },
  methods: {
    setUserList() {
      this.userList = this.users;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>