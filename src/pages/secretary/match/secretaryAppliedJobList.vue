<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.secretaryApplyJobList')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <SecretaryAppliedJobListRow v-for="(item, index) in jobs" :key="index" :job="item">
      </SecretaryAppliedJobListRow>
    </Content>
  </div>
</template>

<script>
  import {apiListAppliedJob} from "../../../api/api";
  import SecretaryAppliedJobListRow from './secretaryAppliedJobListRow'

  export default {
    name: "secretaryAppliedJobList",
    components: {
      SecretaryAppliedJobListRow
    },
    data() {
      return {
        jobs: []
      }
    },
    methods: {
      loadAllData() {
        apiListAppliedJob({
          pageIndex: 0,
          pageSize: 20
        }).then((response) => {
          console.log(response)
          if (response.data.errorCode === 0) {
            this.jobs = response.data.data.newApplyList
          } else {
            this.$Message.error(this.$t('syserr.' + response.data.errorCode))
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
  @import "../../../assets/gogoStyles.css";
</style>
