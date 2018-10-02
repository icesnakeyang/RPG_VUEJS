<template>
  <div>
    <JobApplyList v-for="apply in applyJobList"
                  v-bind:key="apply.job.jobId"
                  v-bind:jobApply="apply"></JobApplyList>
  </div>
</template>

<script>
  import {loadMyApplyJob} from "../../../../api/api";

  import JobApplyList from "../../components/jobApplyList";

  export default {
    name: "myApplyJob",
    components: {
      JobApplyList
    },
    data() {
      return {
        applyJobList: []
      }
    },
    methods: {},
    mounted() {
      loadMyApplyJob({}).then((response) => {
        if (response.data.errorCode === 0) {
          this.applyJobList = response.data.data;
        }
      })

    }
  }
</script>

<style scoped>

</style>
