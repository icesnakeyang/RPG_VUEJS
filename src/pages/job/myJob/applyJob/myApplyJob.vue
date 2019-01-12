<template>
  <div>
    <MyApplyJobRow v-for="apply in applyJobList"
                  v-bind:key="apply.job.jobId"
                  v-bind:jobApply="apply"></MyApplyJobRow>
  </div>
</template>

<script>
  import {apiListMyApplyJob} from "../../../../api/api";

  import MyApplyJobRow from "./myApplyJobRow";

  export default {
    name: "myApplyJob",
    components: {
      MyApplyJobRow
    },
    data() {
      return {
        applyJobList: []
      }
    },
    methods: {
      loadAllData(){
        apiListMyApplyJob({}).then((response) => {
          if (response.data.errorCode === 0) {
            this.applyJobList = response.data.data.jobList;
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

</style>
