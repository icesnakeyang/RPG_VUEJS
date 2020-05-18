<template>
  <div>
    <Breadcrumb :style="{margin:'24px 0'}">
      <BreadcrumbItem to="taskPage">{{$t('navigator.myTask')}}</BreadcrumbItem>
      <BreadcrumbItem>{{$t('navigator.publishTask')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content style="min-height: 450px">
      <Form :model="task" :label-width="0">
        <FormItem v-show="errInput">
          <Alert type="error" show-icon>{{errMsg}}</Alert>
        </FormItem>
        <FormItem :label="$t('task.title')">
          <Input v-model="task.title"/>
        </FormItem>
        <FormItem :label="$t('task.code')">
          <Input v-model="task.code"/>
        </FormItem>
        <FormItem :label="$t('task.days')">
          <InputNumber v-model="task.days"/>
        </FormItem>
        <FormItem :label="$t('task.price')">
          <InputNumber v-model="task.price"/>
        </FormItem>

        <div>{{$t('task.detail')}}</div>
        <FormItem>
          <quill-editor v-model="task.detail"
                        :options="editorOptions"
          ></quill-editor>
        </FormItem>

        <FormItem v-show="!saving">
          <Button type="primary" @click="clickPublish">{{$t("job.publish")}}</Button>
        </FormItem>
        <FormItem v-show="saving">
          <template>
            <!--<Spin size="small"></Spin>-->
            <!--<Spin></Spin>-->
            <Spin size="large"></Spin>
          </template>
        </FormItem>
      </Form>
    </Content>
  </div>
</template>

<script>
    import {apiGetTaskDetailByTaskId} from "../../api/api";
    import {apiPublishNewJob} from "../../api/api";
    import {quillEditor} from "vue-quill-editor";
    import {ImageResize} from "quill-image-resize-module"

    export default {
        name: "taskFreelancer",
        components: {
            quillEditor
        },
        data() {
            return {
                task: {},
                errInput: false,
                errMsg: '',
                saving: false,
                editorOptions: {
                    modules: {
                        imageResize: true
                    }
                }
            }
        },
        computed: {
            taskID() {
                this.task.taskId = this.$route.params.taskId;
                return this.task.taskId;
            }
        },
        methods: {
            loadAllData() {
                apiGetTaskDetailByTaskId({
                    taskId: this.$store.state.taskId
                }).then((response) => {
                    this.task = response.data.data.task;
                })
            },
            clickPublish() {
                if (this.inputCheck()) {
                    return;
                }
                this.saving = true;
                apiPublishNewJob({
                    taskId: this.task.taskId,
                    title: this.task.title,
                    code: this.task.code,
                    days: this.task.days,
                    price: this.task.price,
                    detail: this.task.detail
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.$Message.success(this.$t("job.succPublish"));
                        // jump to job detail
                        this.$router.push({
                            name: "jobDetail",
                            params: {
                                jobId: response.data.data.jobId
                            }
                        })
                    } else {
                        this.errInput = true;
                        this.errMsg = this.$t("syserr." + response.data.errorCode);
                        this.$Message.error(this.$t("syserr." + response.data.errorCode));
                        this.saving = false;
                    }
                })
            },
            inputCheck() {
                this.errInput = false;
                if (!this.task.taskId) {
                    this.errInput = true;
                    this.errMsg = this.$t("task.publishTaskFail");
                }
                if (!this.task.title) {
                    this.errInput = true;
                    this.errMsg = this.$t("task.checkTitle");
                }
                if (!this.task.days) {
                    this.errInput = true;
                    this.errMsg = this.$t("task.checkDays");
                }
                if (!this.task.price) {
                    if(this.task.price!==0) {
                        this.errInput = true
                        this.errMsg = this.$t("task.checkPrice");
                    }
                }
                if(!this.task.detail){
                    this.errInput=true
                    this.errMsg=this.$t("task.checkDetail")
                }
                return this.errInput;
            }
        },
        created() {
            this.loadAllData()
        }
    }
</script>

<style scoped>

</style>
