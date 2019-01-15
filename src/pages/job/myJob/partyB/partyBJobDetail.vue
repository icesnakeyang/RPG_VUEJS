<template>
  <div>
    <ToolBar></ToolBar>
    <JobDetailTpl v-bind:job="job"></JobDetailTpl>
  </div>
</template>

<script>
  import JobDetailTpl from "../partyA/jobDetailTpl"
  import {apiGetJobDetail} from "../../../../api/api"
  import ToolBar from "../component/toolbar"

  export default {
    name: "partyBJobDetail",
    components: {
      JobDetailTpl,
      ToolBar
    },
    data() {
      return {
        job:{}
      }
    },
    methods: {
      loadData() {
        apiGetJobDetail(this.$store.state.jobId).then((response) => {
          if (response.data.errorCode === 0) {
            this.job = response.data.data.job
          }
        })
      },
      onLog(){
      }
    },
    mounted(){
      this.loadData()
    }
  }
</script>

<style scoped>

</style>
