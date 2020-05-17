<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem to="myApplyJob">{{$t('navigator.myApply')}}</BreadcrumbItem>
      <BreadcrumbItem>{{$t('navigator.jobDetail')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Card class="card">
        <p slot="title">
          {{job.title}}
        </p>
        <p>{{$t("task.code")}}: {{job.code}}</p>
        <p>{{$t("job.partyAName")}}: {{job.partyAName}}</p>
        <p>{{$t("job.publishTime")}}: {{publishTime}}</p>
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
    import {apiGetMyApplyJob} from "../../../../api/api";
    import {quillEditor} from "vue-quill-editor"
    import {rpgFunc} from "../../../../common/rpgfun";

    export default {
        name: "myApplyJobDetail",
        components: {
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
                return rpgFunc.formatTime(this.job.createdTime)
            }
        },

        methods: {
            loadAllData() {
                apiGetMyApplyJob({
                    jobId: this.$store.state.jobId
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.job = response.data.data.job
                    } else {
                        this.$Message.error(this.$t('syserr.' + response.data.errorCode))
                    }
                })
            }
        },

        mounted() {
            if (this.$route.params.jobId) {
                this.$store.dispatch('saveJobId', (this.$route.params.jobId))
            }
            this.loadAllData()
        }
    }
</script>

<style scoped>
  @import "../../../../assets/gogoStyles.css";
</style>
