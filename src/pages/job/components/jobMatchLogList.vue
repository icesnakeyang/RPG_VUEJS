<template>
  <Card class="card">
    <p slot="title">
      <a @click="goJobDetail(log.job.jobId)">
        {{log.job.title}}</a>
    </p>
    <p>{{$t("job.code")}}:{{log.job.code}}</p>
    <p>{{$t("job.publishUserName")}}: {{log.job.partyAName}}</p>
    <p>{{$t("job.publishTime")}}: {{publishTime}}</p>
    <p>{{$t("jobMatchLog.matchTime")}}: {{matchTime}}</p>
    <p>{{$t("job.days")}}: {{log.job.days}}</p>
    <p>{{$t("job.price")}}: {{log.job.price}}</p>
    <br>
    <p>{{$t("job.applyUserNum")}}: {{log.job.jobApplyNum}}</p>
    <p>{{$t("job.matchingUserNum")}}: {{log.job.jobMatchNum}}</p>
  </Card>
</template>

<script>

  import {rpgFunc} from "../../../common/rpgfun";

  export default {
    name: "jobMatchLogList",
    props: {
      log: {}
    },
    computed:{
      publishTime(){
        return rpgFunc.formatTime(this.log.job.createdTime)
      },
      matchTime(){
        return rpgFunc.formatTime(this.log.match.matchTime)
      }
    },
    methods:{
      goJobDetail(jobId){
        this.$router.push({
          name:"myMatchJobDetail",
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
