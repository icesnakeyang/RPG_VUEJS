<template>
  <div>
    <JobPartyAListTpl v-for="job in jobList"
                     v-bind:key="job.jobId"
                     v-bind:job="job"
    ></JobPartyAListTpl>
  </div>
</template>

<script>
  import JobPartyAListTpl from '../../components/jobPartyAListTpl'
  import {loadMyPartyAJob} from "../../../../api/api";

  export default {
    name: "partyAJobPage",
    components: {
      JobPartyAListTpl
    },
    data(){
      return{
        jobList:[]
      }
    },
    mounted(){
      loadMyPartyAJob({}).then((response)=>{
        if(response.data.errorCode===0){
          this.jobList=response.data.data.content
        }
      })
    }
  }
</script>

<style scoped>

</style>
