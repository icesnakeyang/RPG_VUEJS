<template>
  <div>
    <Card class="card" v-for="item in jobs" :key="item.jobId">
      <p slot="title"><a @click="goTask(item.taskId)">{{item.title}}</a></p>
      <p>{{$t("task.code")}}: {{item.code}}</p>
      <p>{{$t("task.days")}}: {{item.days}}</p>
    </Card>
  </div>
</template>

<script>
  import {loadTask} from "../../api/api";

  export default {
    name: "taskPage",
    data() {
      return {
        jobs: []
      }
    },
    methods: {
      goTask(id) {
        this.$store.dispatch('saveTaskId', id)
        this.$router.push({
          name: 'taskDetail',
          params: {
            taskId: id
          }
        })
      }
    },
    mounted() {
      loadTask({
        pageIndex: 0,
        pageSize: 100
      }).then((response) => {
        if(response.data.errorCode!==0){
            this.$Message.error(this.$t("syserr." + response.data.errorCode));
        }
        this.jobs = response.data.data.content;
      })
    }
  }
</script>

<style scoped>
  .card {
    margin: 20px;
  }

</style>
