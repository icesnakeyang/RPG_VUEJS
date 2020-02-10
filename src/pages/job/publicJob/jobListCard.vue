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
        /**
         * 跳转到任务详情页面
         * 这里要检查当前用户
         * 如果当前用户是甲方，就跳转到甲方专用的详情页面
         */
        console.log(this.$store.state.userId)
        console.log(this.job.partyAId)
        if(this.$store.state.userId.toString()===this.job.partyAId.toString()){
          this.$router.push({
            name:'publicJobDetailPartyA',
            params:{
              jobId:jobId
            }
          })
        }else{
          this.$router.push({
            name: 'publicJobDetail',
            params:{
              jobId:jobId
            }
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
