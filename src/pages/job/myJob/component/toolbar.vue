<template>
  <div class="card">
    {{unlog}}
    <Badge :count=badgeInfo.unreadJobLog type="error">
      <Button type="info" @click="onLog" class="gogo_badge">{{$t("job.tabLog")}}</Button>
    </Badge>
    <Badge :count="5" type="error">
      <Button type="success" class="gogo_badge">{{$t("job.tabComplete")}}</Button>
    </Badge>
    <Badge :count="5" type="error">
      <Button type="warning" class="gogo_badge">{{$t("job.tabStop")}}</Button>
    </Badge>
    <Badge :count="5" type="error">
      <Button type="error" class="gogo_badge">{{$t("job.tabSpotlight")}}</Button>
    </Badge>
  </div>
</template>

<script>
  export default {
    name: "toolbar",
    props: {
      badgeInfo: {
        unreadJobLog:0
      }
    },
    methods: {
      onLog() {
        this.$router.push({
          name: 'jobLogPage',
          params: {
            jobId: this.$route.params.jobId
          }
        })
      }
    },
    computed:{
      unlog(){
        console.log(this.badgeInfo.unreadJobLog);
        return this.badgeInfo.unreadJobLog;
      }
    },
    mounted(){
      console.log(this.badgeInfo.unreadJobLog)
    }
  }
</script>

<style scoped>
  .card {
    margin: 20px;
  }

  .gogo_badge {
    /*width: 42px;*/
    /*height: 42px;*/
    /*background: #eee;*/
    /*border-radius: 6px;*/
    /*display: inline-block;*/
    /*font-size: 14px;*/
    margin-left: 20px;
  }
</style>
