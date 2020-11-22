<template>
<div>
  <Card style="margin-top: 20px">
    <Row>
      <Col :xs="24" :sm="16" :md="16" :lg="20">
        <a @click="goJobDetail(job.jobId)">
          {{job.title}}</a>
      </Col>
      <Col :xs="24" :sm="4" :md="4" :lg="2">
          <Icon type="logo-usd" color="#2b85e4"/>
          {{job.price}}
      </Col>
      <Col :xs="24" :sm="4" :md="4" :lg="2">
          <Icon type="ios-bookmark" color="#2b85e4"/>
          {{job.code}}
      </Col>
    </Row>
    <Row>
      <Col :xs="24" :sm="8" :md="8" :lg="8">
          <Icon type="md-person" color="#2b85e4"/>
        {{job.partyAName}}
      </Col>
      <Col :xs="24" :sm="8" :md="8" :lg="8">
          <Icon type="md-person" color="#FF5252"/>
          {{job.partyBName}}
      </Col>
      <Col :xs="24" :sm="8" :md="8" :lg="8">
        <Tag color="blue">{{$t('common.status.ACCEPTED')}}</Tag>
      </Col>
    </Row>
  </Card>
</div>
</template>

<script>
export default {
name: "myJobCardTiny",
  props: [
    'job'
  ],
  computed: {
    status() {
      if(job.status==='ACCEPTANCE'){
        return true
      }
      return false
    }
  },
  methods: {
    goJobDetail(jobId) {
      /**
       * 跳转到任务详情页面
       * 这里要检查当前用户
       * 如果当前用户是甲方，就跳转到甲方专用的详情页面
       */
      if (this.$store.state.userId) {
        if (this.$store.state.userId.toString() === this.job.partyAId.toString()) {
          this.$router.push({
            name: 'partyAJobDetail',
            params: {
              jobId: jobId
            }
          })
          return
        }
      }
      if (this.$store.state.userId) {
        if (this.$store.state.userId.toString() === this.job.partyBId.toString()) {
          this.$router.push({
            name: 'partyBJobDetail',
            params: {
              jobId: jobId
            }
          })
          return
        }
      }
      this.$router.push({
        name: 'publicJobDetail',
        params: {
          jobId: jobId
        }
      })
    }
  }
}
</script>

<style scoped>
.card{
  background: #ff5252;
}
</style>
