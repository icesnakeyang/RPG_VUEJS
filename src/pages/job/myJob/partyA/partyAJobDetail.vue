<template>
  <div>
    <ToolBar></ToolBar>
    <JobDetailTpl v-bind:job="job"></JobDetailTpl>
  </div>
</template>

<script>
  import JobDetailTpl from '../../../job/components/jobDetailTpl'
  import {loadJobDetail} from "../../../../api/api";
  import ToolBar from '../component/toolbar'

  export default {
    name: "partyAJobDetail",
    components: {
      JobDetailTpl,
      ToolBar
    },
    data() {
      return {
        job: {}
      }
    },
    methods: {
      loadData() {
        loadJobDetail(this.$store.state.jobId).then((response) => {
          console.log(response);
          if(response.data.errorCode===0){
            this.job=response.data.data.job
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
