<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem to="partyBJobPage">{{$t('navigator.partyB')}}</BreadcrumbItem>
      <BreadcrumbItem>{{$t('navigator.jobDetail')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <ToolBar></ToolBar>
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
    import {apiGetPartyBJobDetail} from "../../../../api/api"
    import ToolBar from "../component/toolbar"
    import {quillEditor} from "vue-quill-editor"
    import {rpgFormat} from "../../../../common/rpgfun";

    export default {
        name: "partyBJobDetail",
        components: {
            ToolBar,
            quillEditor
        },
        data() {
            return {
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
                return rpgFormat.formatTime(this.job.createdTime)
            },
            contractTime() {
                return rpgFormat.formatTime(this.job.contractTime)
            }
        },
        methods: {
            loadAllData() {
                apiGetPartyBJobDetail({
                    jobId: this.$store.state.jobId
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.job = response.data.data
                    }
                })
            },
            onLog() {
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
