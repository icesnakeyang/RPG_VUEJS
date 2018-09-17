<template>
  <Table :columns="columns1" :data="users" height="200"></Table>
</template>

<script>
  import {loadUsers} from "../../api/api";

  export default {
    name: "UnadminUserTable",
    props: [
      'users'
    ],
    data() {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
