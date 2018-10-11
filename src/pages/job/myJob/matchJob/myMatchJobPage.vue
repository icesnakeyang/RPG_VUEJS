<template>
  <div>
    <JobMatchLogList v-for="log in matchLogs"
                 v-bind:key="log.jobId"
                 v-bind:log="log"
    ></JobMatchLogList>
  </div>
</template>

<script>
  import {loadMyNewJob} from "../../../../api/api";
  import JobMatchLogList from "../../components/jobMatchLogList"

  export default {
    name: "myMatchJobPage",
    components:{
      JobMatchLogList
    },
    data(){
      return{
        matchLogs:[]
      }
    },
    methods:{

    },
    mounted() {
      console.log(1);
      loadMyNewJob({}).then((response) => {
        console.log(response)
        this.matchLogs=response.data.data.newJobs
        console.log(this.matchLogs)
      })
    }
  }
</script>

<style scoped>

</style>
