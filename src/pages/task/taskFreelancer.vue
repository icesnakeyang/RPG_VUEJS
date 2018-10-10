<template>
  <Form :model="task" :label-width="200">
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
      <Input v-model="task.days"/>
    </FormItem>
    <FormItem :label="$t('task.price')">
      <Input v-model="task.price"/>
    </FormItem>

    <FormItem :label="$t('task.detail')">
      <quill-editor v-model="task.detail"></quill-editor>
    </FormItem>

    <FormItem v-show="!saving">
      <Button type="primary" @click="clickPublish">{{$t("task.publish")}}</Button>
    </FormItem>
    <FormItem v-show="saving">
      <template>
        <!--<Spin size="small"></Spin>-->
        <!--<Spin></Spin>-->
        <Spin size="large"></Spin>
      </template>
    </FormItem>
  </Form>
</template>

<script>
  import {loadTaskDetail} from "../../api/api";
  import {publishNewJob} from "../../api/api";
  import {quillEditor} from "vue-quill-editor";

  export default {
    name: "taskFreelancer",
    components:{
      quillEditor
    },
    data() {
      return {
        task: {},
        errInput: false,
        errMsg: '',
        saving: false
      }
    },
    computed: {
      taskID() {
        this.task.taskId = this.$route.params.taskId;
        return this.task.taskId;
      }
    },
    methods: {
      clickPublish() {
        console.log(this.task)
        if (this.inputCheck()) {
          return;
        }
        this.saving = true;
        publishNewJob({
          taskId: this.task.taskId,
          title: this.task.title,
          code: this.task.code,
          days: this.task.days,
          price: this.task.price,
          jobDetail:this.task.detail
        }).then((response) => {
          console.log(response)
          if (response.data.errorCode===0) {
            this.$Message.success(this.$t("task.succPublish"));
            // jump to job detail
            console.log(response.data.data.job.jobId)
            this.$router.push({
              name:"jobDetail",
              params:{
                jobId:response.data.data.job.jobId
              }
            })
          }else {
            this.errInput=true;
            this.errMsg=this.$t("task.errPublish");
            this.$Message.error(this.$t("task.errPublish"));
            this.saving=false;
          }
        })
      },
      getAllData() {
        loadTaskDetail(this.$route.params.taskId)
          .then((response) => {
            this.task = response.data.data;
          })
      },
      inputCheck() {
        this.errInput = false;
        console.log(this.task.taskId)
        if (!this.task.taskId) {
          this.errInput = true;
          this.errMsg = "1";
        }
        if (!this.task.title) {
          this.errInput = true;
          this.errMsg = "2";
        }
        if (!this.task.days) {
          this.errInput = true;
          this.errMsg = "3";
        }
        if (!this.task.price) {
          this.errInput = true
          this.errMsg = this.$t("task.checkPrice");
        }
        return this.errInput;
      }
    },
    created() {
      this.getAllData()
    }
  }
</script>

<style scoped>

</style>
