<template>

  <Card class="card">
    <p slot="title">
    <a @click="onJob(job.jobId)">
      {{job.title}}
    </a>
    </p>
    <p>{{$t("job.code")}}: {{job.code}}</p>
    <p>{{$t("job.days")}}: {{job.days}}</p>
    <p>{{$t("job.price")}}: {{job.price}}</p>
    <p>{{$t("secretary.match.applyUserNum")}}: {{job.jobApplyNum}}</p>
  </Card>

</template>

<script>
  import {rpgFormat} from "../../../common/rpgfun";
  import ApplyUserList from "./applyUserList"

  export default {
    name: "secretaryMatchRow",
    components: {
      ApplyUserList
    },
    data() {
      return {}
    },
    props: {
      job: {}
    },
    computed: {
      applyTime() {
        return rpgFormat.formatTime(this.job.applyTime);
      }
    },
    methods: {
      onJob(jobId) {
        this.$router.push({
          name:'applyPage',
          params:{
            jobId: jobId
          }
        })
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .card {
    margin: 20px
  }
</style>
