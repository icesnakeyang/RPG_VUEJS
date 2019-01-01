<template>
  <div>
    <Button type="primary" @click="onCreate">{{$t('spot.spotlight.btCreate')}}</Button>
    <MySpotPageRow v-for="(item, index) in spotlightList"
                   :spot="item"
                   :key="index">
    </MySpotPageRow>
  </div>
</template>

<script>
  import {apiListSpotlight} from "../../../../api/api";
  import MySpotPageRow from "./mySpotPageRow"

  export default {
    name: "mySpotPage",
    components:{
      MySpotPageRow
    },
    data(){
      return{
        spotlightList:[]
      }
    },
    methods:{
      loadAllData(){
        apiListSpotlight({
          jobId:this.$store.state.jobId,
          pageIndex:0,
          pageSize:100
        }).then((response)=>{
          if(response.data.errorCode===0){
            this.spotlightList=response.data.data.content
          }else{
            this.$Message.error(this.$t('syserr.'+response.data.errorCode))
          }
        })
      },
      onCreate(){
        this.$router.push({
          name:'createSpotlight'
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

</style>
