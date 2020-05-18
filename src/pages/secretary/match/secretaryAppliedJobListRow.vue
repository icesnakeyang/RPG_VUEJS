<template>
  <Card>
    <p slot="title">
      <a @click="onDetail">
        {{job.title}}
      </a>
    </p>
    <p>Code: {{job.code}}</p>
    <p>Price: {{job.price}}</p>
    <p>Days: {{job.days}}</p>
    <p>Publish time: {{publishTime}}</p>
  </Card>
</template>

<script>

  import {rpgFunc} from "../../../common/rpgfun";

  export default {
    name: "secretaryAppliedJobListRow",
    props: {
      job: {}
    },
    computed: {
      publishTime() {
        return rpgFunc.formatTime(this.job.createdTime)
      }
    },
    methods: {
      onDetail() {
        this.$router.push({
          name: 'secretaryApplyPage',
          params: {
            jobId: this.job.jobId
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
