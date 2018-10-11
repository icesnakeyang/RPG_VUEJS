<template>
  <Card class="card">
    <Row>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <div @click="clickJobCard(job.jobId)">
          <Card style="margin-right: 20px">
            <p slot="title">
              {{job.title}}{{job.jobId}}
            </p>
            <p>{{$t("job.code")}}: {{job.code}}</p>
            <p>{{$t("job.publishUserName")}}: {{job.partyAName}}</p>
            <p>{{$t("job.days")}}: {{job.days}}</p>
            <p>{{$t("job.price")}}: {{job.price}}</p>
            <p>{{$t("job.publishTime")}}: {{jobCreatedTime}}</p>
          </Card>
        </div>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <div>{{$t("admin.totalApplyUser")}}:{{job.jobApplyNum}}</div>
        <ApplyUserList v-bind:jobId="job.jobId"></ApplyUserList>
      </Col>
    </Row>
  </Card>
</template>

<script>
  import {rpgFormat} from "../../common/rpgfun";
  import ApplyUserList from "./applyUserList"

  export default {
    name: "matchJobPageRow",
    components: {
      ApplyUserList
    },
    data() {
      return {

      }
    },
    props: {
      job: {}
    },
    computed: {
      jobCreatedTime() {
        return rpgFormat.formatTime(this.job.createdTime);
      }
    },
    methods: {
      clickJobCard(jobId) {
        console.log('match job' + jobId)

      }
    },
    mounted() {
      console.log(this.job)
    }
  }
</script>

<style scoped>
  .card {
    margin: 20px
  }
</style>
