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
    <FormItem :label="$t('task.detail')">
      <quill-editor v-model="task.detail"></quill-editor>
    </FormItem>
    <FormItem :label="$t('task.days')">
      <Input v-model="task.days"/>
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
</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import {quillEditor} from 'vue-quill-editor'

  import {createTask} from "../../api/api";

  export default {
    name: "taskNew",
    components:{
      quillEditor
    },
    data(){
      return{
        task:{},
        errInput:false,
        errMsg:'',
        saving:false
      }
    },
    methods: {
      create() {
        if(!this.task.title){
          return;
        }
        if(!this.task.days){
          return;
        }
        this.saving=true;
        createTask({
          title:this.task.title,
          detail:this.task.detail,
          days:this.task.days,
          code:this.task.code
        }).then((response)=>{
          if(response.data.errorCode===0){
            this.$router.push({name:'taskPage'})
          }else {
            this.errInput=true;
            this.errMsg=this.$t("task.err1")
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
