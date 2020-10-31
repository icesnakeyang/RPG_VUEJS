<template>
  <Card class="card">
    <p slot="title">
      <Badge :count="unread"></Badge>
      <a @click="goJobDetail(job.jobId)">
        {{ job.title }}</a>
    </p>
    <Row>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{ $t("task.code") }}:{{ job.code }}</p>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <div v-if="COMPLETE">
          <Tag color="green">{{$t('common.status.COMPLETE')}}</Tag>
        </div>
        <div v-if="PROGRESS">
          <Tag color="blue">{{$t('common.status.PROGRESS')}}</Tag>
        </div>
        <div v-if="PENDING">
          <Tag color="cyan">{{$t('common.status.PENDING')}}</Tag>
        </div>
        <div v-if="ACCEPTED">
          <Tag color="purple">{{$t('common.status.ACCEPTED')}}</Tag>
        </div>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{ $t("job.partyAName") }}: {{ job.partyAName }}</p>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{ $t("job.partyBName") }}: {{ job.partyBName }}</p>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{ $t("job.publishTime") }}: {{ publishTime }}</p>
      </Col>

      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{ $t("task.days") }}: {{ job.days }}</p>

      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{ $t("task.price") }}: {{ job.price }}</p>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{ $t("job.contractTime") }}: {{ contractTime }}</p>

      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <!--<p>{{$t("apply.readTime")}}: {{readTime}}</p>-->
      </Col>
      <Divider/>
      <Col :xs="12" :sm="6" :md="6" :lg="6">
      </Col>
      <Col :xs="12" :sm="6" :md="6" :lg="6">
      </Col>
    </Row>
  </Card>
</template>

<script>
import moment from "moment";

export default {
  name: "jobPartyAListTpl",
  props: {
    job: {}
  },
  computed: {
    COMPLETE() {
      if (this.job.status === 'COMPLETE') {
        return true
      }
      return false
    },
    PROGRESS() {
      if (this.job.status === 'PROGRESS') {
        return true
      }
      return false
    },
    PENDING() {
      if (this.job.status === 'PENDING') {
        return true
      }
      return false
    },
    ACCEPTED(){
      if (this.job.status === 'ACCEPTANCE') {
        return true
      }
      return false
    },
    publishTime() {
      return moment(this.job.createdTime).format('YYYY-MM-DD HH:mm')
    },
    contractTime() {
      return moment(this.job.contractTime).format('YYYY-MM-DD HH:mm')
    },
    unread() {
      let cc = 0
      if (this.job && this.job.totalLogUnread) {
        cc += this.job.totalLogUnread
      }
      if (this.job && this.job.totalCompleteUnread) {
        cc += this.job.totalCompleteUnread
      }
      if (this.job && this.job.totalStopUnread) {
        cc += this.job.totalStopUnread
      }
      return cc
    }
  },
  methods: {
    goJobDetail(jobId) {
      this.$store.dispatch('saveJobId', jobId);
      this.$router.push({
        name: 'partyAJobDetail',
        params: {
          jobId: jobId
        }
      })
    }
  }
}
</script>

<style scoped>
.card {
  margin: 20px;
}

</style>
