<template>
  <div>
    <job-list-card v-for="job in jobs"
                   v-bind:key="job.jobId"
                   v-bind:job="job"
    ></job-list-card>
  </div>
</template>

<script>
  import {apiListPublicJob} from "../../../api/api";
  import jobListCard from './jobListCard'

  export default {
    name: "jobPlaza",
    components:{
      jobListCard
    },
    data(){
      return{
        jobs:[]
      }
    },
    computed:{
      token(){
        return this.$store.state.token
      },
      username(){
        return this.$store.state.username
      }
    },

    mounted() {
      apiListPublicJob({
        pageIndex:0,
        pageSize:100
      }).then((data)=>{
        console.log(data)
        this.jobs=data.data.data.jobs.content
      });

    }
  }
</script>

<style scoped>
  .card {
    margin: 20px;
  }
</style>
