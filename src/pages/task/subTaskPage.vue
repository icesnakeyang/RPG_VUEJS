<template>
  <div>
    <div>{{pTask.title}}</div>
    <Form :label-width="80">
      <FormItem>
        <Input type="text" v-model="taskTitle" placeholder="Enter something..."></Input>
        <Button type="primary" long @click="addTask" icon="md-add">{{$t('task.addSubTaskTitle')}}</Button>
      </FormItem>
    </Form>
    <CellGroup v-for="row in tasks">
        <Cell>
          <span @click="onTask(row)">{{row.title}}</span>
        </Cell>
    </CellGroup>

  </div>
</template>

<script>
  import {ApiGetTaskTinyByTaskId} from "../../api/api";
  import {apiListSubTask} from "../../api/api";
  import {apiCreateSubTask} from "../../api/api";

  export default {
    name: "subTaskPage",
    data(){
      return{
        pTask:{},
        tasks:[],
        taskTitle:''
      }
    },
    methods:{
      loadData(){
        ApiGetTaskTinyByTaskId({
          taskId:this.$store.state.taskId
        }).then((response)=>{
          if(response.data.errorCode===0){
            this.pTask=response.data.data.task
          }else {
            this.$Message.error(this.$t("syserr."+response.data.errorCode))
          }
        })
        apiListSubTask({
          pid:this.$store.state.taskId
        }).then((response)=>{
          if(response.data.errorCode===0){
            this.tasks=response.data.data.task
          }else{
            this.$Message.error(this.$t("syserr."+response.data.errorCode))
          }
        })
      },
      addTask () {
        apiCreateSubTask({
          pid:this.$store.state.taskId,
          title:this.taskTitle,
          code:this.pTask.code
        }).then((response)=>{
          if(response.data.errorCode===0){
            this.loadSubTaskList()
          }else {
            this.$Message.error(this.$t("syserr."+response.data.errorCode))
          }
        })
      },
      loadSubTaskList() {
        apiListSubTask({
          pid: this.$store.state.taskId
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.tasks = response.data.data.task
          } else {
            this.$Message.error(this.$t("syserr." + response.data.errorCode))
          }
        })
      },
      onTask(row){

        this.$store.dispatch('saveTaskId', row.taskId)
        this.$router.push({
          name:'taskDetail',
          params:{
            taskId:row.taskId
          }
        })
      }
    },
    mounted() {
      this.loadData()
    }
  }
</script>

<style scoped>

</style>
