<template>
  <div>
    <job-detail-card
      v-bind:job="job"
    ></job-detail-card>
    <div style="text-align: center">
      <br><br>
      <Button type="primary" @click="onApplyJob">{{$t("job.btApplyJob")}}</Button>
    </div>

  </div>
</template>

<script>
  import {apiGetJobDetail} from "../../../api/api";
  import jobDetailCard from "./jobDetailCard";

  export default {
    name: "jobDetail",
    components: {
      jobDetailCard
    },
    data() {
      return {
        job: {}
      }
    },
    methods: {
      loadAllData() {
        apiGetJobDetail(this.$store.state.jobId).then((response) => {
          this.job = response.data.data.job
        })
      },
      onApplyJob() {
        this.$router.push({
          name: 'jobApplyForm',
          params: {
            jobId: this.$route.params.jobId
          }
        })
      }
    },
    mounted() {
      if(this.$route.params.jobId){
        this.$store.dispatch('saveJobId', this.$route.params.jobId)
      }
      this.loadAllData()
    }
  }
</script>

<style scoped>

</style>
