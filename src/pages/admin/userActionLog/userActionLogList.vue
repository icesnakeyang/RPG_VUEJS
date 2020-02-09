<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.userActionLogList')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <div>{{$t('job.applyTitle3')}}</div>
    </Content>
  </div>
</template>

<script>
  import {apiListUserActionLog} from "../../../api/api";

  export default {
    name: "userActionLogList",
    data() {
      return {
        pageIndex: 1,
        pageSize: 20
      }
    },
    methods: {
      loadAllData() {
        let params = {
          // pageIndex: this.pageIndex,
          pageSize: this.pageSize
        }
        apiListUserActionLog(params).then((response) => {
          console.log(response)
          if(response.data.errorCode===0){

          }else {
            this.$Message.error(this.$t('syserr.20002'))
          }
        }).catch((error) => {
          console.log(error.toString())
        })
      }
    },
    mounted() {
      this.loadAllData()
    }
  }
</script>

<style scoped>
  @import "../../../assets/gogoStyles.css";
</style>
