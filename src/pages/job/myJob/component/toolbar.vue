<template>
  <div class="card">
    <Button type="primary">Primary</Button>
    <Button type="info" @click="onLog">log</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
  </div>
</template>

<script>
  export default {
    name: "toolbar",
    methods: {
      onLog() {
        this.$router.push({
          name:'jobLogPage',
          params:{
            jobId:this.$route.params.jobId
          }
        })
      }
    }
  }
</script>

<style scoped>
  .card {
    margin: 20px;
  }
</style>
