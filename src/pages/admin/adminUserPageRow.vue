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
        name: "adminUserPageRow",
      props:{
          user:{}
      },
      computed:{
          createdTime(){
            return
          }
      }
    }
</script>

<style scoped>
  .card{
    margin:20px
  }
</style>
