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
    <FormItem>
      <Button type="primary" @click="create">{{$t("task.create")}}</Button>
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
        errMsg:''
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

        createTask({
          title:this.task.title,
          detail:this.task.detail,
          days:this.task.days
        }).then((response)=>{
          if(response.data.data.id){
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
