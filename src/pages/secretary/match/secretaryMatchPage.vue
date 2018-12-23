<template>
	<div>list of all the new apply here</div>
</template>

<script>
  import {apiListNewApply} from "../../../api/api";

  export default {
        name: "secretaryMatchPage",
      methods:{
          loadAllData(){
            apiListNewApply({
              "pageIndex":0,
              "pageSize":20
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
