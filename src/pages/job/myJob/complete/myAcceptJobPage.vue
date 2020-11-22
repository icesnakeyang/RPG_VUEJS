<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.myAcceptJob')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Tabs value="name1">
        <TabPane label="甲方任务" name="name1">
          <JobCardTiny v-for="(item, index) in jobsA"
                  :job="item"
                  :key="index"></JobCardTiny>
          <Page :total="totalJobsA" style="margin-top: 20px" @on-change="onJobPageA"></Page>
        </TabPane>
        <TabPane label="乙方任务" name="name2">
          <JobCardTiny v-for="(item, index) in jobsB"
                  :job="item"
                  :key="index"></JobCardTiny>
          <Page :total="totalJobsB" style="margin-top: 20px" @on-change="onJobPageB"></Page>
        </TabPane>
      </Tabs>
    </Content>
  </div>
</template>

<script>
    import {apiListMyPartyAAcceptJob} from "../../../../api/api";
    import JobRow from './jobRow'
    import {apiListMyPartyBAcceptJob} from "../../../../api/api";
    import {apiSetAcceptReadTime} from "../../../../api/api";
    import JobCardTiny from '../../components/myJobCardTiny'

    export default {
        name: "myAcceptJobPage",
        components: {
            JobRow,
          JobCardTiny
        },
        data() {
            return {
              pageIndexA:1,
              pageSizeA:10,
              pageIndexB:1,
              pageSizeB:10,
                jobsA: [],
              totalJobsA:0,
                jobsB: [],
              totalJobsB:0
            }
        },
        methods: {

            loadAllData() {
              let params={
              }
                apiListMyPartyAAcceptJob({
                    pageIndex: this.pageIndexA,
                    pageSize: this.pageSizeA
                }).then((response) => {
                  console.log(response)
                    if (response.data.errorCode === 0) {
                        this.jobsA = response.data.data.jobList
                      this.totalJobsA=response.data.data.totalJobs
                    }else{
                      this.$Message.error(this.$t('syserr.'+response.data.errorCode))
                    }
                }).catch(()=>{
                  this.$Message.error(this.$t('syserr.30000'))
                })

                apiListMyPartyBAcceptJob({
                    pageIndex: this.pageIndexB,
                    pageSize: this.pageSizeB
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.jobsB = response.data.data.jobs
                    }else{
                      this.$Message.error(this.$t('syserr.'+response.data.errorCode))
                    }
                }).catch(()=>{
                  this.$Message.error(this.$t('syserr.30000'))
                })

                apiSetAcceptReadTime({}).then((response) => {

                })
            },
          onJobPageA(e){
              this.pageIndexA=e
            this.loadAllData()
          },
          onJobPageB(e) {
              this.pageIndexB=e
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
