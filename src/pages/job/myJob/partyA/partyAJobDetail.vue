<template>
  <div>
    <ToolBar v-bind:badgeInfo="jobInfo.badgeInfo"></ToolBar>
    <JobDetailTpl v-bind:job="jobInfo.job"></JobDetailTpl>
  </div>
</template>

<script>
  import JobDetailTpl from '../../../job/components/jobDetailTpl'
  import ToolBar from '../component/toolbar'
  import {jobDeailPage} from "../../../../api/api";

  export default {
    name: "partyAJobDetail",
    components: {
      JobDetailTpl,
      ToolBar
    },
    data() {
      return {
        jobInfo:{
          badgeInfo:{},
          job:{}
        }
      }
    },
    methods: {
      loadData() {
        jobDeailPage({
          jobId: this.$store.state.jobId
        }).then((response) => {
          console.log(response);
          if (response.data.errorCode === 0) {

            this.jobInfo.job = response.data.data.job

            this.jobInfo.badgeInfo.unreadJobLog=response.data.data.unreadJobLog
            console.log("ok")
          console.log(this.jobInfo.badgeInfo)
          }
        })
      }
    },
    mounted() {
      console.log(this.$route.params)
      this.loadData()

    }
  }
</script>

<style scoped>

</style>
