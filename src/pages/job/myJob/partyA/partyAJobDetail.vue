<template>
  <div>
    <ToolBar v-bind:badgeInfo="jobInfo.badgeInfo"></ToolBar>
    <JobDetailTpl v-bind:job="jobInfo.job"></JobDetailTpl>
  </div>
</template>

<script>
  import JobDetailTpl from '../../../job/components/jobDetailTpl'
  import ToolBar from '../component/toolbar'
  import {loadJobDetail} from "../../../../api/api";

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
        loadJobDetail(this.$store.state.jobId).then((response) => {
          if (response.data.errorCode === 0) {
            this.jobInfo.job = response.data.data.job
          }
        })
      }
    },
    mounted() {
      this.loadData()
    }
  }
</script>

<style scoped>

</style>
