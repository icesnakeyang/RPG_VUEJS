<template>
  <Card class="card">
    <p slot="title">
      {{user.realName}}
    </p>
    <p>{{user.email}}</p>
    <p>{{user.phone}}</p>
    <p>{{user.username}}</p>
  </Card>
</template>

<script>
    export default {
        name: "secretaryUserPageRow",
      props:{
          user:{}
      },
      computed:{
          createTime(){

          }
      }
    }
</script>

<style scoped>

</style>
