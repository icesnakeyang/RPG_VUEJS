<template>
  <div class="card">
    <Badge :count="badgeInfo.unReadJobLog" type="error">
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
  import {loadUnreadByJobId} from "../../../../api/api";

  export default {
    name: "toolbar",
    data() {
      return {
        badgeInfo: {
          unReadJobLog: 0
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
      }
    },
    mounted() {
      loadUnreadByJobId({
        jobId: this.$store.state.jobId
      }).then((response) => {
        if (response.data.errorCode === 0) {
          this.badgeInfo.unReadJobLog = response.data.data.unReadJobLog
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
