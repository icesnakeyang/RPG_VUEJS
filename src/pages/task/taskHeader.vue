<template>
  <div style="padding: 20px">
    <Button type="info" @click="clickUpdate">{{$t("task.update")}}</Button>
    <Button type="primary" @click="onSubTask">{{$t("task.subTask")}}</Button>
    <Button type="warning" @click="clickFreelancer">{{$t("task.freelancer")}}</Button>
    <Button type="success" @click="onComplete">{{$t("task.complete")}}</Button>
    <Button type="error" @click="onDelete">{{$t("task.delete")}}</Button>
  </div>
</template>

<script>
  export default {
    name: "taskHeader",
    methods: {
      clickUpdate() {
        this.$router.push({
          name: 'taskEdit', params: {
            taskId: this.$route.params.taskId
          }
        })
      },
      clickFreelancer(){
        this.$router.push({
          name:'taskFreelancer', params:{
            taskId:this.$route.params.taskId
          }
        })
      },
      onSubTask(){
        this.$router.push({
          name:'createSubTask',
          params:{
            taskId:this.$route.params.taskId
          }
        })

      },
      onDelete(){

      },
      onComplete(){

      }

    }
  }
</script>

<style scoped>

</style>
