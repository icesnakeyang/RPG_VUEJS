<template>
  <div>
    <SpotlightListRow v-for="(item, index) in spotList"
                      :spotlight="item"
                      :key="index">
    </SpotlightListRow>
  </div>
</template>

<script>
  import {apiListSpotlightPlaza} from "../../api/api"
  import SpotlightListRow from "./spotlightListRow"

  export default {
    name: "spotlightList",
    components:{
      SpotlightListRow
    },
    data(){
      return{
        spotList:[]
      }
    },
    methods: {
      loadAllData() {
        apiListSpotlightPlaza({
          pageIndex:0,
          pageSize:20
        }).then((response)=>{
          if(response.data.errorCode===0){
            console.log(response)
            this.spotList=response.data.data.spotlightList.content
          }else{
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
