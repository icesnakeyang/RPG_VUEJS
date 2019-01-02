<template>
  <Card class="card">
    <p slot="title">
      <a @click="goJobDetail(job.jobId)">
        {{job.title}}</a>
    </p>
    <p>{{$t("task.code")}}:{{job.code}}</p>
    <p>{{$t("task.createdUserName")}}: {{job.partyAName}}</p>
    <p>{{$t("task.createdTime")}}: {{createdTime}}</p>
    <p>{{$t("task.days")}}: {{job.days}}</p>
    <p>{{$t("task.price")}}: {{job.price}}</p>
  </Card>
</template>

<script>
  import {rpgFormat} from "../../../common/rpgfun";

  export default {
    name: "jobListCard",
    props: [
      'job'
    ],
    computed: {
      createdTime() {
        return rpgFormat.formatTime(this.job.createdTime);
      }
    },
    methods: {
      goJobDetail(jobId) {
        this.$router.push({
          name: 'jobDetail',
          params:{
            jobId:jobId
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
