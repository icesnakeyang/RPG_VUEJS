<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.jobLog')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Button type="info" @click="onCreateJobLog" class="card">
        {{$t("job.tbCreateLog")}}
      </Button>
      <Button type="error" @click="onRefreshData">刷新页面</Button>
      <JobLogRow v-for="log in jobLogList"
                 v-bind:key="log.jobLogId"
                 v-bind:log="log"
                 @onRefreshData="onRefreshData"
      ></JobLogRow>
    </Content>
  </div>
</template>

<script>
    import JobLogRow from "./jobLogRow"
    import {apiListJobLog, apiSetJobLogReadTime} from "../../../../api/api";

    export default {
        name: "jobLogPage",
        components: {
            JobLogRow
        },
        data() {
            return {
                pageIndex: 1,
                pageSize: 10,
                jobLogList: []
            }
        },
        methods: {
            loadAllData() {
                const params = {
                    jobId: this.$store.state.jobId,
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize
                }
                apiListJobLog(params).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.jobLogList = response.data.data
                        this.setReadTime()
                    }else{
                        this.$Message.error(this.$t('syserr.'+response.data.errorCode))
                    }
                })
            },
            setReadTime() {
                apiSetJobLogReadTime({
                    jobId: this.$store.state.jobId
                }).then((response) => {
                })
            },

            onCreateJobLog() {
                this.$router.push({
                    name: 'createJobLog',
                    params: {
                        jobId: this.$store.state.jobId
                    }
                })
            },

          onRefreshData(){
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

  .card {
    margin: 20px;
  }
</style>
