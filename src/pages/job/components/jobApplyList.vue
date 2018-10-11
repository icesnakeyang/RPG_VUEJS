<template>
  <Card class="card">
    <p slot="title">
      <a @click="goJobDetail(jobApply.job.jobId)">
        {{jobApply.job.title}}</a>
    </p>
    <p>{{$t("job.code")}}:{{jobApply.job.code}}</p>
    <Row>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("job.publishUserName")}}: {{jobApply.job.partyAName}}</p>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("job.publishTime")}}: {{publishTime}}</p>
      </Col>

      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("job.days")}}: {{jobApply.job.days}}</p>

      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("job.price")}}: {{jobApply.job.price}}</p>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("apply.applyTime")}}: {{applyTime}}</p>

      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <!--<p>{{$t("apply.readTime")}}: {{readTime}}</p>-->
      </Col>
    <Divider />
      <Col :xs="12" :sm="6" :md="6" :lg="6">
        <p>{{$t("job.applyUserNum")}}: {{jobApply.applyNum}}</p>
      </Col>
      <Col :xs="12" :sm="6" :md="6" :lg="6">
        <p>{{$t("job.matchingUserNum")}}: {{jobApply.matchNum}}</p>
      </Col>
    </Row>
  </Card>
</template>

<script>
  import {rpgFormat} from "../../../common/rpgfun";

  export default {
    name: "jobApplyList",
    props: {
      jobApply: {}
    },
    computed: {
      publishTime() {
        return rpgFormat.formatTime(this.jobApply.job.createdTime)
      },
      applyTime() {
        return rpgFormat.formatTime(this.jobApply.apply.applyTime)
      },
      readTime() {
        if (this.jobApply.apply.readTime) {
          return rpgFormat.formatTime(this.jobApply.apply.readTime)
        } else {
          return this.$t("common.unRead");
        }
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .card{
    margin: 20px;
  }
</style>
