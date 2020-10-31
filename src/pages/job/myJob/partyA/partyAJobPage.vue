<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{ $t('navigator.partyA') }}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Card>
        <Tag checkable color="primary" @on-change="onProgressStatus">{{ $t('common.status.PROGRESS') }}</Tag>
        <Tag checkable color="success" @on-change="onCompleteStatus">{{ $t('common.status.COMPLETE') }}</Tag>
      </Card>
      <JobPartyAListTpl v-for="job in jobList"
                        v-bind:key="job.jobId"
                        v-bind:job="job"
      ></JobPartyAListTpl>
      <div style="margin-top: 20px">
        <Page :total="totalJobs" @on-change="onJobPage"/>
      </div>
    </Content>
  </div>
</template>

<script>
import JobPartyAListTpl from './jobPartyAListTpl'
import {apiListMyPartyAJob} from "../../../../api/api";

export default {
  name: "partyAJobPage",
  components: {
    JobPartyAListTpl
  },
  data() {
    return {
      pageIndex: 1,
      pageSize: 10,
      jobList: [],
      totalJobs: 0,
      jobStatus: [
        'PROGRESS',
        'COMPLETE'
      ]
    }
  },
  methods: {
    loadAllData() {
      apiListMyPartyAJob({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        statusList: this.jobStatus
      }).then((response) => {
        console.log(response)
        if (response.data.errorCode === 0) {
          this.jobList = response.data.data.jobs
          this.totalJobs = response.data.data.totalJobs
        } else {
          this.$Message.error(this.$t('syserr.' + response.data.errorCode))
        }
      })
    },
    onJobPage(e) {
      this.pageIndex = e
      this.loadAllData()
    },

    onCompleteStatus(e) {
      if (e) {
        this.jobStatus.push('COMPLETE')
      } else {
        let index = this.jobStatus.indexOf('COMPLETE')
        this.jobStatus.splice(index, 1)
      }
      this.pageIndex=1
      this.loadAllData()
    },

    onProgressStatus(e) {
      if (e) {
        this.jobStatus.push('PROGRESS')
      } else {
        let index = this.jobStatus.indexOf('PROGRESS')
        this.jobStatus.splice(index, 1)
      }
      this.pageIndex=1
      this.loadAllData()
    }
  },
  mounted() {
    this.loadAllData()
  }
}
</script>

<style scoped>
@import "../../../../assets/gogoStyles.css";
</style>
