<template>
  <div class="card">
    <Badge :count="badgeInfo.unReadJobLog" type="error">
      <Button type="info" @click="onLog" class="gogo_badge">{{$t("job.tabLog")}}({{totalLog}})</Button>
    </Badge>
    <Badge :count="badgeInfo.unReadComplete" type="error">
      <Button type="success" @click="onComplete" class="gogo_badge">{{$t("job.tabComplete")}}({{totalComplete}})</Button>
    </Badge>
    <Badge :count="badgeInfo.unReadStop" type="error">
      <Button type="warning" @click="onStop" class="gogo_badge">{{$t("job.tabStop")}}({{totalStop}})</Button>
    </Badge>
    <Badge type="error">
      <Button type="error" @click="onSpot" class="gogo_badge">{{$t("job.tabSpotlight")}}</Button>
    </Badge>
  </div>
</template>

<script>

    import {apiTotalMyUnread} from "../../../../api/api";

    export default {
        name: "toolbar",
        data() {
            return {
                badgeInfo: {
                    unReadJobLog: 0,
                    unReadComplete: 0,
                    unReadStop: 0,
                    totalJobLog:0
                }
            }
        },
        props:{
            totalLog:Number,
            totalComplete:Number,
            totalStop:Number
        },
        methods: {
            loadAllData() {
                const params={
                    jobId: this.$store.state.jobId
                }
                apiTotalMyUnread(params).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.badgeInfo.unReadJobLog = response.data.data.totalUnreadLog
                        this.badgeInfo.unReadComplete = response.data.data.totalUnreadComplete
                        this.badgeInfo.unReadStop = response.data.data.totalUnreadStop
                    }
                })
            },

            onLog() {
                this.$router.push({
                    name: 'jobLogPage',
                    params: {
                        jobId: this.$store.state.jobId
                    }
                })
            },
            onComplete() {
                this.$router.push({
                    name: 'completePage',
                    params: {
                        jobId: this.$store.state.jobId
                    }
                })
            },
            onStop() {
                this.$router.push({
                    name: 'stopPage',
                    params: {
                        jobId: this.$store.state.jobId
                    }
                })
            },
            onSpot() {
                this.$router.push({
                    name: 'mySpotPage',
                    params: {
                        jobId: this.$store.state.jobId
                    }
                })
            }
        },
        mounted() {
            this.loadAllData()
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
