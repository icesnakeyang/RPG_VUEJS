<template>
  <div>
    <ToolBar></ToolBar>
    <JobDetailTpl v-bind:job="job"></JobDetailTpl>
  </div>
</template>

<script>
  import JobDetailTpl from "../../components/jobDetailTpl"
  import {loadJobDetail} from "../../../../api/api"
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
        loadJobDetail(this.$store.state.jobId).then((response) => {
          console.log(response);
          if (response.data.errorCode === 0) {
            this.job = response.data.data.job
          }
        })
      },
      onLog(){
        console.log('log')
        console.log(this.$route.params.taskId)
      }
    },
    mounted(){
      console.log(this.$store.state.jobId)
      this.loadData()
    }
  }
</script>

<style scoped>

</style>
