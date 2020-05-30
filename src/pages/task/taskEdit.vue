<template>
  <div>
    <Breadcrumb :style="{margin:'24px 0'}">
      <BreadcrumbItem to="taskPage">{{$t('navigator.myTask')}}</BreadcrumbItem>
      <BreadcrumbItem>{{$t('navigator.editTask')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content>
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
        <div>{{$t('task.detail')}}</div>
        <FormItem>
          <quill-editor v-model="task.detail"
                        :options="editorOption"
          ></quill-editor>
        </FormItem>
        <FormItem :label="$t('task.price')">
          <InputNumber :min="0" v-model="price"/>
        </FormItem>
        <FormItem :label="$t('task.days')">
          <InputNumber :min="1" v-model="days"/>
        </FormItem>
        <FormItem v-show="!saving">
          <Button type="primary" @click="clickUpdate">{{$t("task.update")}}</Button>
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
  import {apiUpdateTask} from "../../api/api";
  import {quillEditor} from "vue-quill-editor";
  import {ImageResize} from 'quill-image-resize-module'

  export default {
    name: "taskEdit",
    components: {
      quillEditor
    },
    data() {
      return {
        task: {},
        price: 0,
        days: 1,
        errInput: false,
        errMsg: false,
        saving: false,
        editorOption: {
          modules: {
            imageResize: true
          }
        }
      }
    },
    methods: {
      loadAllData() {
        apiGetTaskDetailByTaskId({
          taskId: this.$store.state.taskId
        }).then((response) => {
          this.task = response.data.data.task;
          this.price = response.data.data.task.price
          this.days = response.data.data.task.days
        })
      },
      clickUpdate() {
        this.saving=true

        apiUpdateTask({
          taskId: this.$store.state.taskId,
          title: this.task.title,
          detail: this.task.detail,
          days: this.days,
          code: this.task.code,
          price: this.price
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.saving=false
            this.$router.push({
              name: 'taskDetail',
              params: {
                taskId: this.$route.params.taskId
              }
            })
          } else {
            this.errInput = true;
            this.errMsg = this.$t("task.err1")
            this.saving=false
          }
        })

      }
    },
    created() {
      this.loadAllData()
    }
  }
</script>

<style scoped>

</style>
