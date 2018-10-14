<template>
  <div style="padding: 20px">
    <Button @click="clickUpdate">{{$t("task.update")}}</Button>
    <Button to="/components/icon-en" replace>{{$t("task.logs")}}</Button>
    <Button to="//iviewui.com" target="_blank">{{$t("task.subTask")}}</Button>
    <Button @click="clickFreelancer">{{$t("task.freelancer")}}</Button>
    <Button to="//iviewui.com" target="_blank">{{$t("task.complete")}}</Button>
    <Button to="//iviewui.com" target="_blank">{{$t("task.delete")}}</Button>
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
      }
    }
  }
</script>

<style scoped>

</style>
