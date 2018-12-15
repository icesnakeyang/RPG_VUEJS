<template>
  <div>
    <JobDetailCard v-bind:job="job"></JobDetailCard>
    <div style="text-align: center">
      <br><br>
      <Button type="primary" @click="onUpdateJob">{{$t("job.update")}}</Button>
    </div>
  </div>
</template>

<script>
  import {apiGetJobDetail} from "../../../../api/api";
  import JobDetailCard from "../../jobDetailCard"

  export default {
    name: "myPendingJobDetail",
    components: {
      JobDetailCard
    },
    data() {
      return {
        job: {}
      }
    },
    methods: {
      loadAllData() {
        console.log(this.$store.state.jobId)
        apiGetJobDetail(this.$store.state.jobId).then((response) => {
          console.log(response)
          if (response.data.errorCode === 0) {
            this.job = response.data.data.job
          }
        })
      },
      onUpdateJob() {
        console.log(this.job.jobId)
        this.$router.push({
          name:'myPendingJobUpdate',
          params:{
            jobId:this.job.jobId
          }
        })
      }
    },
    mounted() {
      if (this.$route.params.jobId) {
        this.$store.dispatch("saveJobId", this.$route.params.jobId)
      }
      this.loadAllData()
    }
  }
</script>

<style scoped>

</style>
