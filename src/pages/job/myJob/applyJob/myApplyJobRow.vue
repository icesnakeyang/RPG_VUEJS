<template>
  <Card class="card">
    <p slot="title">
      <a @click="onGoJobDetail(jobApply.job.jobId)">
        {{jobApply.job.title}}</a>
    </p>
    <p>{{$t("task.code")}}:{{jobApply.job.code}}</p>
    <Row>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("job.partyAName")}}: {{jobApply.job.partyAName}}</p>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("job.publishTime")}}: {{publishTime}}</p>
      </Col>

      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("task.days")}}: {{jobApply.job.days}}</p>

      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("task.price")}}: {{jobApply.job.price}}</p>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("job.applyTime")}}: {{applyTime}}</p>

      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
<!--        <p>{{$t("apply.readTime")}}: {{readTime}}</p>-->
      </Col>
    </Row>
    <Input type="textarea" v-model="jobApply.apply.content" readonly></Input>
    <Divider />
    <Row>
      <Col :xs="12" :sm="6" :md="6" :lg="6">
        <p>{{$t("job.applyUserNum")}}: {{jobApply.applyNum}}</p>
      </Col>
      <Col :xs="12" :sm="6" :md="6" :lg="6">

      </Col>
    </Row>
  </Card>
</template>

<script>
  import {rpgFormat} from "../../../../common/rpgfun";

  export default {
    name: "myApplyJobRow",
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
    methods:{
      onGoJobDetail(item){
        this.$router.push({
          name:'myApplyJobDetail',
          params:{
            jobId:item
          }
        })
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
