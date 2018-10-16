<template>
  <div>
    <Button type="info" @click="onCreateJobLog" class="card">Create</Button>
    <JobLogRow v-for="log in jobLogList"
               v-bind:key="log.jobLogId"
               v-bind:log="log"
    ></JobLogRow>
  </div>
</template>

<script>
  import {jobLog} from "../../../../api/api";
  import JobLogRow from "./jobLogRow"
  import {setJobLogReadTime} from "../../../../api/api";

  export default {
    name: "jobLogPage",
    components:{
      JobLogRow
    },
    data(){
      return{
        jobLogList:[]
      }
    },
    methods:{
      loadData(){
        jobLog({
          jobId:this.$store.state.jobId,
          pageIndex:0,
          pageSize:100
        }).then((response)=>{
          if(response.data.errorCode===0){
            this.jobLogList=response.data.data.content
            this.setReadTime()
          }
        })
      },
      setReadTime(){
        setJobLogReadTime({
          jobId:this.$store.state.jobId
        }).then((response)=>{
        })
      },

      onCreateJobLog(){
        this.$router.push({
          name:'createJobLog',
          params:{
            jobId:this.$store.state.jobId
          }
        })
      }
    },
    mounted() {
      this.loadData()
    }
  }
</script>

<style scoped>
  .card{
    margin: 20px;
  }
</style>
