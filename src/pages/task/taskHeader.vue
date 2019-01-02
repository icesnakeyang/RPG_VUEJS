<template>
  <div style="padding: 20px">
    <Button type="info" @click="onUpdate">{{$t("task.update")}}</Button>
    <Button type="primary" @click="onSubTask">{{$t("task.subTask")}}({{theTotalSubTask}})</Button>
    <Button type="warning" @click="onFreelancer">{{$t("task.freelancer")}}</Button>
    <Button type="success" @click="onComplete">{{$t("task.complete")}}</Button>
    <Button type="error" @click="onDelete">{{$t("task.delete")}}</Button>
  </div>
</template>

<script>
  import {apiDeleteTask} from "../../api/api";

  export default {
    name: "taskHeader",
    data() {
      return {
        taskId: 0
      }
    },
    props:{
      totalSub:0
    },
    computed:{
      theTotalSubTask(){
        return this.totalSub;
      }
    },
    methods: {
      onUpdate() {
        this.$router.push({
          name: 'taskEdit', params: {
            taskId: this.$store.state.taskId
          }
        })
      },
      onFreelancer() {
        this.$router.push({
          name: 'taskFreelancer', params: {
            taskId: this.$store.state.taskId
          }
        })
      },
      onSubTask() {
        this.$router.push({
          name: 'subTaskPage',
          params: {
            taskId: this.$store.state.taskId
          }
        })
      },
      onComplete(){

      },
      onDelete(){
        this.$Modal.confirm({
          title: this.$t("common.tipTitleQuestion"),
          content: this.$t("task.tipDelete"),
          onOk: () => {
            this.deleteTask()
          },
          onCancel: () => {

          }
        });
      },
      deleteTask(){
        const pid=this.pid
        apiDeleteTask({
          taskId:this.taskId
        }).then((response)=>{
          if(response.data.errorCode===0){
            if(pid){
              this.$router.push({
                name:'taskDetail',
                params:{
                  taskId:pid
                }
              })
            }else{
              this.$router.push({
                name:'taskPage'
              })
            }
          }else {
            this.$Message.error(this.$t("syserr."+response.data.errorCode))
          }
        })
      }
    },
    mounted() {
      this.taskId = this.$store.state.taskId
    }
  }
</script>

<style scoped>

</style>
