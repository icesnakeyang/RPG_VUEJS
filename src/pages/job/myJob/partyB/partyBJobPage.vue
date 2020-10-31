<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.partyB')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Card>
        <Tag checkable color="primary" @on-change="onProgressStatus">{{ $t('common.status.PROGRESS') }}</Tag>
        <Tag checkable color="success" @on-change="onCompleteStatus">{{ $t('common.status.COMPLETE') }}</Tag>
      </Card>
      <JobPartyBListTpl v-for="job in jobList"
                        v-bind:key="job.jobId"
                        v-bind:job="job"
      ></JobPartyBListTpl>
      <div style="margin-top: 20px">
        <Page :total="totalJobs" @on-change="onJobPage"/>
      </div>
    </Content>
  </div>
</template>

<script>
  import JobPartyBListTpl from "./jobPartyBListTpl"
  import {apiListMyPartyBJob} from "../../../../api/api";

  export default {
    name: "partyBJobPage",
    components: {
      JobPartyBListTpl
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
        apiListMyPartyBJob({
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
          statusList: this.jobStatus
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.jobList = response.data.data.jobList
            this.totalJobs = response.data.data.totalJobs
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
        this.loadAllData()
      },

      onProgressStatus(e) {
        if (e) {
          this.jobStatus.push('PROGRESS')
        } else {
          let index = this.jobStatus.indexOf('PROGRESS')
          this.jobStatus.splice(index, 1)
        }
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
