<template>
  <div style="padding: 20px">
    <Button type="info" @click="clickUpdate">{{$t("task.update")}}</Button>
    <Button type="primary" @click="onSubTask">{{$t("task.subTask")}}({{totalSubTask}})</Button>
    <Button type="warning" @click="clickFreelancer">{{$t("task.freelancer")}}</Button>
    <Button type="success" @click="onComplete">{{$t("task.complete")}}</Button>
    <Button type="error" @click="onDelete">{{$t("task.delete")}}</Button>
  </div>
</template>

<script>
  import {apiCountSubTask} from "../../api/api";

  export default {
    name: "taskHeader",
    data() {
      return {
        taskId: 0,
        totalSubTask: 0
      }
    },
    methods: {
      clickUpdate() {
        this.$router.push({
          name: 'taskEdit', params: {
            taskId: this.$route.params.taskId
          }
        })
      },
      clickFreelancer() {
        this.$router.push({
          name: 'taskFreelancer', params: {
            taskId: this.$route.params.taskId
          }
        })
      },
      onSubTask() {
        this.$router.push({
          name: 'subTaskPage',
          params: {
            taskId: this.$route.params.taskId
          }
        })

      },
      onDelete() {

      },
      onComplete() {

      },
      loadData() {
        apiCountSubTask({
          pid: this.taskId
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.totalSubTask = response.data.data.totalSub
          }
        })
      }
    },
    mounted() {
      this.taskId = this.$store.state.taskId
      this.loadData()
    }
  }
</script>

<style scoped>

</style>
