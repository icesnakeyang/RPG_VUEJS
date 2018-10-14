<template>
  <Card class="card">
    <p slot="title">
      {{admin.role}}
    </p>
    <AdminPageRow v-for="row in admin.admin" :key="row.adminId"
                  v-bind:row="row">
    </AdminPageRow>
  </Card>
</template>

<script>
  import AdminPageRow from "./adminPageRow"
  export default {
    name: "adminPageRoleBar",
    components:{
      AdminPageRow
    },
    props: {
      admin: {}
    },
    mounted(){
    }
  }
</script>

<style scoped>
  .card {
    margin: 20px;
  }
</style>
