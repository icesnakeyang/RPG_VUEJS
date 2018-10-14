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
      loadMyNewJob({}).then((response) => {
        this.matchLogs=response.data.data.newJobs
      })
    }
  }
</script>

<style scoped>

</style>
