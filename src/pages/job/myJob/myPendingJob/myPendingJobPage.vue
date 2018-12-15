<template>
  <div>我发布的任务，咋还没人接呢</div>
</template>

<script>
  export default {
    /**
     * 我发布的且等待成交的工作
     */
    name: "myPendingJobPage",
    methods:{
      loadData(){
        apiListMyPendingJob().then((response)=>{
          console.log(response)
        })
        console.log('load data')
      }
    },
    mounted(){
      console.log(this.$store.state)
      this.loadData()
    }
  }
</script>

<style scoped>

</style>
