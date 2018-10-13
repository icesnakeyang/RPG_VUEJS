<template>
  <div>
    <JobDetailTpl v-bind:job="job"></JobDetailTpl>
  </div>
</template>

<script>
  import JobDetailTpl from '../../../job/components/jobDetailTpl'
  import {loadJobDetail} from "../../../../api/api";

  export default {
    name: "partyAJobDetail",
    components: {
      JobDetailTpl
    },
    data() {
      return {
        job: {}
      }
    },
    methods: {
      loadData() {
        loadJobDetail(this.$route.params.jobId).then((response) => {
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
