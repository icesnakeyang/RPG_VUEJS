<template>
  <div>
    <SecretaryMatchRow v-for="(item, index) in jobs" :job="item">

    </SecretaryMatchRow>
  </div>
</template>

<script>
  import {apiListJobMatching} from "../../../api/api";
  import SecretaryMatchRow from "./secretaryMatchRow"

  export default {
    name: "secretaryMatchPage",
    components: {
      SecretaryMatchRow
    },
    data(){
      return{
        jobs:[]
      }
    },
    methods: {
      loadAllData() {
        apiListJobMatching({
          "pageIndex": 0,
          "pageSize": 20
        }).then((response) => {
          if(response.data.errorCode===0){
            this.jobs=response.data.data.newApplyList.content
          }else {
            this.$Message.error(this.$t("syserr."+response.data.errorCode))
          }
        })
      }
    },
    mounted() {
      if(this.$route.params.jobId){
        this.$store.dispatch('saveJobId', this.$route.params.jobId)
      }
      this.jobId=this.$store.state.jobId
      this.loadAllData()
    }
  }
</script>

<style scoped>

</style>
