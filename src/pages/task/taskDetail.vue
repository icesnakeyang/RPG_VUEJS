<template>
  <div>
    <TaskHeader :totalSub="totalSub"></TaskHeader>
    <Card class="card">
      <p slot="title">
        {{task.title}}
      </p>
      <div v-if="published">
        <Tag color="success">已发布</Tag>
      </div>
      <p>{{$t("task.code")}}:{{task.code}}</p>
      <p>{{$t("task.createdUserName")}}: {{task.createdUserName}}</p>
      <p>{{$t("task.createdTime")}}: {{createdTime}}</p>
      <p>{{$t("task.days")}}: {{task.days}}</p>
      <p>{{task.price}}</p>
      <quill-editor v-model="task.detail"
                    :options="options">
      </quill-editor>
    </Card>
  </div>
</template>

<script>
  import {loadTaskDetail} from "../../api/api";
  import {apiCountSubTask} from "../../api/api";
  import {quillEditor} from 'vue-quill-editor'
  import TaskHeader from './taskHeader';

  export default {
    name: "taskDetail",
    data() {
      return {
        task: {},
        job: {},
        options: {
          modules: {
            toolbar: false
          }
        },
        published:false,
        totalSub:0,
        taskBreadcrumb:[

        ],
        breadlist: ''
      }
    },
    computed: {
      createdTime() {
        var timestamp3 = this.task.createdTime;
        var newDate = new Date();
        newDate.setTime(timestamp3);
        return newDate.toLocaleString()
      },
      pid(){
        return this.task.pid
      }
    },
    components: {
      quillEditor,
      TaskHeader
    },
    props: {},
    mounted() {
      this.taskId=this.$route.params.taskId
      this.$store.dispatch('saveTaskId', this.taskId)
      this.getAllData()
    },
    methods: {
      getAllData() {
        loadTaskDetail({
          taskId: this.$route.params.taskId
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.task = response.data.data.task
            this.job = response.data.data.job
            if(this.job){
              this.published=true
            }
            this.$store.dispatch('saveTaskId', this.task.taskId)
          }else{
            this.$Message.error(this.$t("syserr."+response.data.errorCode))
          }
        })

        apiCountSubTask({
          pid: this.taskId
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.totalSub = response.data.data.totalSub
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
