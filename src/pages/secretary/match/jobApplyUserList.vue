<template>
  <div>job apply user list</div>
</template>

<script>
  import {apiListApplyByJobId} from "../../../api/api";

  export default {
    name: "jobApplyUserList",
    methods: {
      loadAllData() {
        apiListApplyByJobId({
          pageIndex: 1,
          pageSize: 20,
          jobId: this.$store.state.jobId
        }).then((response) => {
          console.log(response)
        })
      }
    },
    mounted() {
      console.log(this.$store.state)
      this.loadAllData()
    }
  }
</script>

<style scoped>

</style>
