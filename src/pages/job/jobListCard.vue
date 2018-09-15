<template>
  <Card class="card">
    <p slot="title">
      <a @click="goJobDetail(job.jobId)">
        {{job.title}}</a>
    </p>
    <p>{{$t("task.code")}}:{{job.code}}</p>
    <p>{{$t("task.createdUserName")}}: {{job.createdUserName}}</p>
    <p>{{$t("task.createdTime")}}: {{createdTime}}</p>
    <p>{{$t("task.days")}}: {{job.days}}</p>
    <p>{{$t("task.price")}}: {{job.reward}}</p>
  </Card>
</template>

<script>
  export default {
    name: "jobListCard",
    props: [
      'job'
    ],
    computed: {
      createdTime() {
        var timestamp3 = this.job.createdTime;
        var newDate = new Date();
        newDate.setTime(timestamp3);
        return newDate.toLocaleString()
      }
    },
    methods: {
      goJobDetail(jobId) {
        console.log(jobId)
        this.$router.push({
          name: 'jobDetail',
          params: {
            jobId: jobId
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
