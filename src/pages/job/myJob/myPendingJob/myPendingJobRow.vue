<template>
  <div>
    <Card class="card">
      <p slot="title">
        <a @click="onJob">{{job.title}}</a>
      </p>
      <p>
        {{publishedTime}}
      </p>
    </Card>
  </div>
</template>

<script>
  import {rpgFormat} from "../../../../common/rpgfun";

  export default {
    name: "myPendingJobRow",
    props: {
      job: {}
    },
    computed: {
      publishedTime() {
        return rpgFormat.formatTime(this.job.createdTime)
      }
    },
    methods:{
      onJob(){
        this.$router.push({
          name:'myPendingJobDetail',
          params:{
            jobId:this.job.jobId
          }
        })
      }
    }
  }
</script>

<style scoped>
  .card{
    margin: 20px;
  }
</style>
