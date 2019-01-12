<template>
  <div class="card">
    <Tag type="dot" color="primary">{{job.title}}</Tag>
    <ApplyRow v-for="(item, index) in applies"
              :apply="item"
              :key="index">
    </ApplyRow>
  </div>
</template>

<script>
  import {apiListApplyByJobId} from "../../../api/api";
  import ApplyRow from "./applyRow"
  import {apiGetApplyJobTiny} from "../../../api/api";

  export default {
    name: "secretaryApplyPage",
    components:{
      ApplyRow
    },
    data(){
      return{
        applies:[],
        job:{}
      }
    },
    methods: {
      loadAllData() {
        apiListApplyByJobId({
          pageIndex: 1,
          pageSize: 20,
          jobId: this.$store.state.jobId
        }).then((response) => {
          if(response.data.errorCode===0){
            this.applies=response.data.data.applyList
          }else{
            this.$Message.error(this.$t("syserr."+response.data.errorCode))
          }
        })
        apiGetApplyJobTiny(this.$store.state.jobId).then((response)=>{
          if(response.data.errorCode===0){
            this.job=response.data.data.job
          }else{
            this.$Message.error(this.$t("syserr."+response.data.errorCode))
          }
        })
      }
    },
    mounted() {
      if(this.$route.params.jobId){
        this.$store.dispatch('saveJobId', this.$route.params.jobId)
      }
      this.loadAllData()
    }
  }
</script>

<style scoped>
  .card{
    margin: 20px;
  }
</style>
