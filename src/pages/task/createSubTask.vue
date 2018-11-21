<template>
  <div>
    <Card class="PageInfo">
      <p>{{$t('task.subTaskTitleBar')}}</p>
    </Card>
    <Card class="card">
      <Form :model="subTask" :label-width="200">
        <FormItem :label="$t('task.pidTile')">
          <Input v-model="parentTask.title" readonly></Input>
        </FormItem>
        <FormItem v-show="errInput">
          <Alert type="error" show-icon>{{errMsg}}</Alert>
        </FormItem>
        <FormItem :label="$t('task.title')">
          <Input v-model="subTask.title"/>
        </FormItem>
        <FormItem :label="$t('task.code')">
          <Input v-model="parentTask.code" readonly/>
        </FormItem>
        <FormItem :label="$t('task.detail')">
          <quill-editor v-model="subTask.detail"></quill-editor>
        </FormItem>
        <FormItem :label="$t('task.days')">
          <Input v-model="subTask.days"/>
        </FormItem>
        <FormItem v-show="!saving">
          <Button type="primary" @click="create">{{$t("task.create")}}</Button>
        </FormItem>
        <FormItem v-show="saving">
          <template>
            <!--<Spin size="small"></Spin>-->
            <!--<Spin></Spin>-->
            <Spin size="large"></Spin>
          </template>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
  import {loadTaskDetail} from "../../api/api";
  import {createTask} from "../../api/api";
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import {quillEditor} from 'vue-quill-editor'

  export default {
    name: "createSubTask",
    components: {
      quillEditor
    },
    data() {
      return {
        parentTask: {},
        subTask: {},
        errInput: false,
        errMsg: '',
        saving: false
      }
    },
    methods: {
      create() {
        if (!this.subTask.title) {
          return;
        }
        if (!this.subTask.days) {
          return;
        }
        this.saving = true;
        createTask({
          pid: this.$store.state.taskId,
          title: this.subTask.title,
          detail: this.subTask.detail,
          days: this.subTask.days,
          code: this.parentTask.code
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.$router.push({name: 'taskPage'})
          } else {
            this.errInput = true;
            this.errMsg = this.$t("task.err1")
          }
        })
      },
      loadData() {
        loadTaskDetail(this.$store.state.taskId).then((response) => {
          if (response.data.errorCode === 0) {
            this.parentTask = response.data.data.task
          }
        })
      }
    },
    mounted() {
      if (this.$route.params.taskId) {
        this.$store.dispatch('saveTaskId', this.$route.params.taskId)
      }
      this.loadData()
    }
  }
</script>

<style scoped>
  .PageInfo {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: aliceblue;
  }

  .card {
    margin-top: 20px;
  }
</style>
