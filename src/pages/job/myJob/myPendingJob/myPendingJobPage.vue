<template>
  <div>
    <div v-for="(row, index) in jobs" :key="index">
      <MypendingJobRow :job="row"></MypendingJobRow>
    </div>
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
        jobs: []
      }
    },
    methods: {
      loadAllData() {
        apiListMyPendingJob({
          pageIndex: 0,
          pageSize: 10
        }).then((response) => {
          console.log(response)
          if (response.data.errorCode === 0) {
            this.jobs = response.data.data.jobs.content
            console.log(this.jobs)
          }else {
            this.$Message.error(this.$t("syserr."+response.data.errorCode))
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
