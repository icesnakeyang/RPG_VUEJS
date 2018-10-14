<template>
  <div>
    <Card class="card" v-for="item in jobs" :key="item.jobId">
      <p slot="title"><a @click="goTask(item.taskId)">{{item.title}}</a></p>
      <p>{{$t("label.price")}}: {{item.price}}</p>
      <p>{{$t("label.days")}}: {{item.days}}</p>
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
    methods:{
      goTask(id){
        this.$router.push({
          name:'taskDetail',
          params:{
            taskId:id
          }
        })
      }
    },
    mounted() {
      loadTask().then((data) => {
        this.jobs = data.data.data;
      })
    }
  }
</script>

<style scoped>
  .card{
    margin: 20px;
  }

</style>
