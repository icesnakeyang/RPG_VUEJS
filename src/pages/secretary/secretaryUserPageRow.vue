<template>
  <div>
    <Card class="card">
      <p slot="title">
        {{user.realName}}
      </p>
      <p>{{user.email}}</p>
      <p>{{user.phone}}</p>
      <p>{{user.username}}</p>
    </Card>
  </div>
</template>

<script>
  export default {
    name: "secretaryUserPageRow",
    props: {
      user: {}
    },
    computed: {
      createTime() {

      }
    },
    mounted() {
      console.log(this.user.username)
    }
  }
</script>

<style scoped>

</style>
