<template>
  <Card>
    <p slot="title">
      <a @click="onDetail(job.jobId)">
        {{job.title}}
      </a>
    </p>
    <p>{{job.code}}</p>
    <p>{{job.price}}</p>
    <p>{{job.days}}</p>
    <p>{{publishTime}}</p>
  </Card>
</template>

<script>
  import {rpgFormat} from "../../../common/rpgfun";

  export default {
    name: "secretaryAppliedJobListRow",
    props: {
      job: {}
    },
    computed: {
      publishTime() {
        return rpgFormat.formatTime(this.job.createdTime)
      }
    },
    methods: {
      onDetail(data) {
        this.$router.push({
          name: 'secretaryApplyPage',
          params: {
            jobId: data
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
