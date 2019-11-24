<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem to="partyAJobPage">{{$t('navigator.partyA')}}</BreadcrumbItem>
      <BreadcrumbItem>{{$t('navigator.jobDetail')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <ToolBar v-bind:badgeInfo="badgeInfo"></ToolBar>
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
    import {rpgFormat} from "../../../../common/rpgfun";

    export default {
        name: "partyAJobDetail",
        components: {
            ToolBar,
            quillEditor
        },
        data() {
            return {
                badgeInfo: {},
                job: {},
                options: {
                    modules: {
                        toolbar: false
                    }
                }
            }
        },
        computed: {
            publishTime() {
                return rpgFormat.formatTime(this.job.publishTime)
            },
            contractTime() {
                return rpgFormat.formatTime(this.job.contractTime)
            }
        },
        methods: {
            loadAllData() {
                apiGetPartyAJob({
                    jobId: this.$store.state.jobId
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.job = response.data.data
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
