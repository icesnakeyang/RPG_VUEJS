<template>
  <Card class="card">
    <p slot="title">
      {{job.title}}
    </p>
    <p>{{job.createdTime}}</p>
  </Card>
</template>

<script>
  export default {
    name: "matchJobPageRow",
    props: {
      job: {}
    },
  }
</script>

<style scoped>

</style>
