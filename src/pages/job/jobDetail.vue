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
    methods:{
      applyJob(){
        this.$router.push({
          name:'jobApplyForm',
          params:{
            jobId:this.$route.params.jobId,
            jobTitle:this.job.title
          }
        })
      }
    },
    mounted() {
      apiGetJobDetail(this.$route.params.jobId).then((response) => {
        this.job = response.data.data.job
      })
    }
  }
</script>

<style scoped>

</style>
