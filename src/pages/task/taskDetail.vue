<template>
  <div>
    <Breadcrumb :style="{margin:'24px 0'}">
      <BreadcrumbItem to="taskPage">{{$t('navigator.myTask')}}</BreadcrumbItem>
      <!--      <BreadcrumbItem>{{// $t('navigator.taskDetail')}}</BreadcrumbItem>-->

      <BreadcrumbItem v-for="(item, index) in pList" :key="index">
        <a @click="onTask(item.taskId)">{{item.title}}</a>
      </BreadcrumbItem>
    </Breadcrumb>
    <Content>
      <TaskHeader :totalSub="totalSub"></TaskHeader>
      <Card class="card">
        <p slot="title">
          {{task.title}}
        </p>
        <div v-if="isPublish">
          <Button color="success" type="primary" @click="onJob">已发布任务</Button>
        </div>
        <p>{{$t("task.code")}}:{{task.code}}</p>
        <p>{{$t("task.createdUserName")}}: {{task.createdUserName}}</p>
        <p>{{$t("task.createdTime")}}: {{createdTime}}</p>
        <p>{{$t("task.days")}}: {{task.days}}</p>
        <p>{{$t("task.price")}}: {{task.price}}</p>
        <quill-editor v-model="task.detail"
                      :options="options">
        </quill-editor>
      </Card>
    </Content>
  </div>
</template>

<script>
    import {apiCountSubTask} from "../../api/api";
    import {apiListTaskBreadcrumb} from "../../api/api";
    import {quillEditor} from 'vue-quill-editor'
    import TaskHeader from './taskHeader';
    import {apiGetTaskDetailByTaskId} from "../../api/api";
    import moment from 'moment'

    export default {
        name: "taskDetail",
        components: {
            quillEditor,
            TaskHeader
        },
        props: {},
        data() {
            return {
                task: {},
                job: {},
                options: {
                    modules: {
                        toolbar: false
                    },
                    readOnly: true
                },
                published: false,
                totalSub: 0,
                taskBreadcrumb: [],
                breadlist: '',
                pList: []
            }
        },
        computed: {
            createdTime() {
                const time = moment(this.task.createdTime).format("YYYY-MM-DD HH:mm")
                return time
            },
            pid() {
                return this.task.pid
            },
            isPublish() {
                if (this.published) {
                    return true
                }
                return false
            }
        },
        methods: {
            loadAllData() {
                apiGetTaskDetailByTaskId({
                    taskId: this.$store.state.taskId
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.task = response.data.data.task
                        this.job = response.data.data.job
                        if (this.job) {
                            this.published = true
                        }
                        this.$store.dispatch('saveTaskId', this.task.taskId)
                    } else {
                        this.$Message.error(this.$t("syserr." + response.data.errorCode))
                    }
                })

                apiCountSubTask({
                    pid: this.$store.state.taskId
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.totalSub = response.data.data.totalSub
                    } else {
                        this.$Message.error(this.$t("syserr." + response.data.errorCode))
                    }
                })

                apiListTaskBreadcrumb({
                    taskId: this.$store.state.taskId
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.pList = response.data.data.breadList
                    } else {
                        this.$Message.eror(this.$t("syserr." + response.data.errorCode))
                    }
                })
            },
            onTask(data) {
                this.$store.dispatch('saveTaskId', data)
                this.loadAllData()
            },
            onJob() {
                console.log(this.job.jobId)
                this.$router.push({
                    name:'partyAJobDetail',
                    params:{
                        'jobId':this.job.jobId
                    }
                })
            }
        },
        mounted() {
            if (this.$route.params.taskId) {
                this.$store.dispatch('saveTaskId', this.$route.params.taskId)
            }
            this.loadAllData()
        },
    }
</script>

<style scoped>

</style>
