<template>
  <Card class="card">
    <p slot="title">
      <a @click="goJobDetail(job.jobId)">
        {{job.title}}</a>
    </p>
    <p>{{$t("job.code")}}:{{job.code}}</p>
    <Row>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("job.publishUserName")}}: {{job.partyAName}}</p>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("job.publishTime")}}: {{publishTime}}</p>
      </Col>

      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("job.days")}}: {{job.days}}</p>

      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("job.price")}}: {{job.price}}</p>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("apply.applyTime")}}: {{applyTime}}</p>

      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <!--<p>{{$t("apply.readTime")}}: {{readTime}}</p>-->
      </Col>
      <Divider/>
      <Col :xs="12" :sm="6" :md="6" :lg="6">
        <p>{{$t("job.applyUserNum")}}: {{job.applyNum}}</p>
      </Col>
      <Col :xs="12" :sm="6" :md="6" :lg="6">
        <p>{{$t("job.matchingUserNum")}}: {{job.matchNum}}</p>
      </Col>
    </Row>
  </Card>
</template>

<script>
  export default {
    name: "jobPartyAListTpl",
    props: {
      job: {}
    },
  }
</script>

<style scoped>

</style>
