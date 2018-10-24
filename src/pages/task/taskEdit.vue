<template>
  <div>
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
      <FormItem :label="$t('task.detail')">
        <quill-editor v-model="task.detail"></quill-editor>
      </FormItem>
      <FormItem :label="$t('task.days')">
        <Input v-model="task.days"/>
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
  </div>
</template>

<script>
  import {loadTaskDetail} from "../../api/api";
  import {createTask} from "../../api/api";
  import {quillEditor} from "vue-quill-editor";

  export default {
    name: "taskEdit",
    components:{
      quillEditor
    },
    data(){
      return{
        task:{},
        errInput:false,
        errMsg:false,
        saving:false
      }
    },
    methods: {
      getAllData() {
        loadTaskDetail(this.$route.params.taskId)
          .then((response) => {
            this.task = response.data.data.task;
          })
      },
      clickUpdate(){
        createTask({
          taskId:this.$route.params.taskId,
          title:this.task.title,
          detail:this.task.detail,
          days:this.task.days,
          code:this.task.code
        }).then((response)=>{
          if(response.data.errorCode===0){
            this.$router.push({name:'taskDetail',
              params:{
                taskId:this.$route.params.taskId
              }
            })
          }else {
            this.errInput=true;
            this.errMsg=this.$t("task.err1")
          }
        })

      }
    },
    created() {
      this.getAllData()
    }
  }
</script>

<style scoped>

</style>
