<template>
  <div>
    <job-detail-card
      v-bind:job="job"
    ></job-detail-card>
    <div style="text-align: center">
      <br><br>
      <Button type="primary" @click="applyJob">{{$t("job.apply")}}</Button>
    </div>

  </div>
</template>

<script>
  import {apiGetJobDetail} from "../../api/api";
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
      applyJob() {
        this.$router.push({
          name: 'jobApplyForm',
          params: {
            jobId: this.$route.params.jobId,
            jobTitle: this.job.title
          }
        })
      }
    },
    mounted() {
      if (this.$route.params.jobId) {
        if (this.$store.state.jobId === this.$route.params.jobId) {

        } else {
          this.$store.dispatch('saveJobId', this.$route.params.jobId)
        }
      }
      apiGetJobDetail(this.$store.state.jobId).then((response) => {
        this.job = response.data.data.job
      })
    }
  }
</script>

<style scoped>

</style>
