<template>
  <Card class="card">
    <p slot="title">
      <a @click="goJobDetail(log.jobId)">
        {{log.title}}</a>
    </p>
    <p>{{$t("job.code")}}:{{log.code}}</p>
    <p>{{$t("job.publishUserName")}}: {{log.publisherName}}</p>
    <p>{{$t("job.publishTime")}}: {{publishTime}}</p>
    <p>{{$t("jobMatchLog.matchTime")}}: {{publishTime}}</p>
    <p>{{$t("job.days")}}: {{log.days}}</p>
    <p>{{$t("job.price")}}: {{log.price}}</p>
    <br>
    <p>{{$t("job.applyUserNum")}}: {{log.applyNum}}</p>
    <p>{{$t("job.matchingUserNum")}}: {{log.matchingUserNum}}</p>
  </Card>
</template>

<script>
  import {rpgFormat} from "../../../common/rpgfun";

  export default {
    name: "jobMatchLogList",
    props: {
      log: {}
    },
    computed:{
      publishTime(){
        return rpgFormat.formatTime(this.log.publishTime)
      }
    }
  }
</script>

<style scoped>
  .card{
    margin:20px
  }
</style>
