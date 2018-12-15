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
        console.log(this.job.jobId)
        this.$router.push({
          name:'jobDetail',
          params:{
            jobId:this.job.jobId
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
