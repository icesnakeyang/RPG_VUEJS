<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem to="partyAJobPage">{{$t('navigator.partyA')}}</BreadcrumbItem>
      <BreadcrumbItem>{{$t('navigator.jobDetail')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <ToolBar :totalLog="totalLog" :totalComplete="totalComplete" :totalStop="totalStop"></ToolBar>
      <Card class="card">
        <p slot="title">
          {{job.title}}
        </p>
        <p>{{$t("task.code")}}: {{job.code}}</p>
        <p>{{$t("job.partyAName")}}: {{job.partyAName}}</p>
        <p>{{$t("job.partyBName")}}: {{job.partyBName}}</p>
        <p>{{$t("job.publishTime")}}: {{publishTime}}</p>
        <p>{{$t("job.contractTime")}}: {{contractTime}}</p>
        <p>{{$t("task.days")}}: {{job.days}}</p>
        <p>{{$t("task.price")}}: {{job.price}}</p>
        <quill-editor v-model="job.detail"
                      :options="options">
        </quill-editor>
      </Card>
    </Content>
  </div>
</template>

<script>
    import ToolBar from '../component/toolbar'
    import {apiGetPartyAJob} from "../../../../api/api";
    import {quillEditor} from "vue-quill-editor"
    import {rpgFunc} from "../../../../common/rpgfun";

    export default {
        name: "partyAJobDetail",
        components: {
            ToolBar,
            quillEditor
        },
        data() {
            return {
                totalLog: 0,
                totalComplete:0,
                totalStop:0,
                job: {},
                totalJobLog:0,
                options: {
                    modules: {
                        toolbar: false
                    }
                }
            }
        },
        computed: {
            publishTime() {
                return rpgFunc.formatTime(this.job.publishTime)
            },
            contractTime() {
                return rpgFunc.formatTime(this.job.contractTime)
            }
        },
        methods: {
            loadAllData() {
                apiGetPartyAJob({
                    jobId: this.$store.state.jobId
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.job = response.data.data.job
                        this.totalLog = response.data.data.job.totalLog
                        this.totalComplete = response.data.data.job.totalComplete
                        this.totalStop = response.data.data.job.totalStop
                    }
                })
            }
        },
        mounted() {
            if (this.$route.params.jobId) {
                this.$store.dispatch('saveJobId', this.$route.params.jobId)
            }
            this.loadAllData()
        }
    }
</script>

<style scoped>
  @import "../../../../assets/gogoStyles.css";
</style>
