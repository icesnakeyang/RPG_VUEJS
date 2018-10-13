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
          jobId:this.$route.params.jobId,
          pageIndex:0,
          pageSize:100
        }).then((response)=>{
          console.log(response);
          if(response.data.errorCode===0){
            this.jobLogList=response.data.data.content
          }
        })
      },
      onCreateJobLog(){
        this.$router.push({
          name:'createJobLog',
          params:{
            jobId:this.$route.params.jobId
          }
        })
      }
    },
    mounted() {
      console.log(this.$route.params)
      this.loadData()
    }
  }
</script>

<style scoped>
  .card{
    margin: 20px;
  }
</style>
