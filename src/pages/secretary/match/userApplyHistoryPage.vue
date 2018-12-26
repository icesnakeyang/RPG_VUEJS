<template>
    
</template>

<script>
  import {apiListApplyHistory} from "../../../api/api";

  export default {
        name: "userApplyHistoryPage",
      methods:{
          loadAllData(){
            apiListApplyHistory({
              pageIndex:0,
              pageSize:20,
              userId:this.$route.params.userId
            }).then((response)=>{
              console.log(response)
            })
          }
      },
      mounted(){
        this.loadAllData()
      }
    }
</script>

<style scoped>

</style>
