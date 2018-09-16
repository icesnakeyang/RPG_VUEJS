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
  import {loadJobDetail} from "../../api/api";
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
        console.log(this.$route.params);
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
      loadJobDetail(this.$route.params.jobId).then((response) => {
        this.job = response.data.data
        console.log(this.job)
      })
    }
  }
</script>

<style scoped>

</style>
