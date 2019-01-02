<template>
  <div>
    <JobListCard v-for="(item, index) in jobs" :key="index" :job="item"></JobListCard>
  </div>
</template>

<script>
  import {apiListPublicJob} from "../../../api/api";
  import JobListCard from './jobListCard'

  export default {
    name: "publicJobPage",
    components:{
      JobListCard
    },
    data(){
      return{
        jobs:[]
      }
    },
    methods: {
      loadAllData() {
        apiListPublicJob({
          pageIndex:0,
          pageSize:100
        }).then((response) => {
          if(response.data.errorCode===0){
            this.jobs=response.data.data.jobs.content
          }else {
            this.$Message.error(this.$t('syserr.'+response.data.errorCode))
          }
        })
      }
    },
    mounted() {
      this.loadAllData()
    }
  }
</script>

<style scoped>

</style>
