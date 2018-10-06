<template>
  <Card class="card">
    <p slot="title">
      <a @click="goJobDetail(log.job.jobId)">
        {{log.job.title}}</a>
    </p>
    <p>{{$t("job.code")}}:{{log.job.code}}</p>
    <p>{{$t("job.publishUserName")}}: {{log.job.createdUserName}}</p>
    <p>{{$t("job.publishTime")}}: {{publishTime}}</p>
    <p>{{$t("jobMatchLog.matchTime")}}: {{matchTime}}</p>
    <p>{{$t("job.days")}}: {{log.job.days}}</p>
    <p>{{$t("job.price")}}: {{log.job.reward}}</p>
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
        return rpgFormat.formatTime(this.log.job.createdTime)
      },
      matchTime(){
        return rpgFormat.formatTime(this.log.match.matchTime)
      }
    },
    methods:{
      goJobDetail(jobId){
        console.log(jobId)
        this.$router.push({
          name:"newJobDetail",
          params:{
            jobId:jobId
          }
        })
      }
    }
  }
</script>

<style scoped>
  .card{
    margin:20px
  }
</style>
