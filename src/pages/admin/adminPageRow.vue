<template>
  <Card class="card">
    <p slot="title">
      {{row.loginName}}
    </p>
    <p>{{createdTime}}</p>
  </Card>
</template>

<script>

  import {rpgFunc} from "../../common/rpgfun";

  export default {
    name: "adminPageRow",
    props: {
      row: {}
    },
    computed: {
      createdTime() {
        return rpgFunc.formatTime(this.row.createdTime)
      }
    }
  }
</script>

<style scoped>
  .card {
    margin: 20px
  }
</style>
