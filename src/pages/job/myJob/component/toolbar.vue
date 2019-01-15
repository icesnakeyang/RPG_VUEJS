<template>
  <div class="card">
    <Badge :count="badgeInfo.unReadJobLog" type="error">
      <Button type="info" @click="onLog" class="gogo_badge">{{$t("job.tabLog")}}</Button>
    </Badge>
    <Badge :count="badgeInfo.unReadComplete" type="error">
      <Button type="success" @click="onComplete" class="gogo_badge">{{$t("job.tabComplete")}}</Button>
    </Badge>
    <Badge :count="badgeInfo.unReadStop" type="error">
      <Button type="warning" @click="onStop" class="gogo_badge">{{$t("job.tabStop")}}</Button>
    </Badge>
    <Badge type="error">
      <Button type="error" @click="onSpot" class="gogo_badge">{{$t("job.tabSpotlight")}}</Button>
    </Badge>
  </div>
</template>

<script>
  import {apiTotalUnreadByJobId} from "../../../../api/api";

  export default {
    name: "toolbar",
    data() {
      return {
        badgeInfo: {
          unReadJobLog: 0,
          unReadComplete:0,
          unReadStop:0
        }
      }
    },
    methods: {
      onLog() {
        this.$router.push({
          name: 'jobLogPage',
          params: {
            jobId: this.$store.state.jobId
          }
        })
      },
      onComplete(){
        this.$router.push({
          name:'completePage',
          params:{
            jobId:this.$store.state.jobId
          }
        })
      },
      onStop(){
        this.$router.push({
          name:'stopPage',
          params:{
            jobId:this.$store.state.jobId
          }
        })
      },
      onSpot(){
        this.$router.push({
          name:'mySpotPage',
          params:{
            jobId:this.$store.state.jobId
          }
        })
      }
    },
    mounted() {
      apiTotalUnreadByJobId({
        jobId: this.$store.state.jobId
      }).then((response) => {
        if (response.data.errorCode === 0) {
          this.badgeInfo.unReadJobLog = response.data.data.unReadJobLog
          this.badgeInfo.unReadComplete=response.data.data.unReadComplete
          this.badgeInfo.unReadStop=response.data.data.unReadStop
        }
      })
    }
  }
</script>

<style scoped>
  .card {
    margin: 20px;
  }
  .gogo_badge {
    margin-left: 20px;
  }
</style>
