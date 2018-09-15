<template>
  <div>
    <job-list-card v-for="job in jobs"
                   v-bind:key="job.jobId"
                   v-bind:job="job"
    ></job-list-card>
  </div>
</template>

<script>
  import {loadJobPlaza} from '@/api/api'
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
      loadJobPlaza('rpg').then((data)=>{
        this.jobs=data.data.data;
        console.log(this.jobs);
      });

    }
  }
</script>

<style scoped>
  .card {
    margin: 20px;
  }
</style>
