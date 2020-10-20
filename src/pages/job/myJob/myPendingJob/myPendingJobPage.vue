<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>{{$t('navigator.myPending')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content style="min-height: 450px">
      <div v-for="(row, index) in jobs" :key="index">
        <MypendingJobRow :job="row"></MypendingJobRow>
      </div>
      <div style="margin-top: 20px">
        <Page :total="totalJobs" @on-change="onJobPage"/>
      </div>
    </Content>
  </div>
</template>

<script>
  import {apiListMyPendingJob} from "../../../../api/api";
  import MypendingJobRow from './myPendingJobRow'

  export default {
    /**
     * 我发布的且等待成交的工作
     */
    name: "myPendingJobPage",
    components: {
      MypendingJobRow
    },
    data() {
      return {
        pageIndex: 1,
        pageSize: 10,
        jobs: [],
        totalJobs: 0
      }
    },
    methods: {
      loadAllData() {
        apiListMyPendingJob({
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
        }).then((response) => {
          console.log(response)
          if (response.data.errorCode === 0) {
            this.jobs = response.data.data.jobs
            this.totalJobs = response.data.data.totalJobs
          } else {
            this.$Message.error(this.$t("syserr." + response.data.errorCode))
          }
        })
      },

      onJobPage(e) {
        this.pageIndex = e
        this.loadAllData()
      }
    },
    mounted() {
      this.loadAllData()
    }
  }
</script>

<style scoped>

</style>
