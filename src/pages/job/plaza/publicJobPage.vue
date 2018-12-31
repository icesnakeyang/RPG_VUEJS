<template>
  <div>public jobs</div>
</template>

<script>
  import {apiListPublicJob} from "../../../api/api";

  export default {
    name: "publicJobPage",
    methods: {
      loadAllData() {
        apiListPublicJob({
          pageIndex:0,
          pageSize:100
        }).then((response) => {
          if(response.data.errorCode===0){

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
