<template>
  <Card class="card">
    <p slot="title">
      <Badge :count="unread"></Badge>
      <a @click="goJobDetail(job.jobId)">
        {{job.title}}</a>
    </p>
    <p>{{$t("task.code")}}:{{job.code}}</p>
    <Row>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("job.partyAName")}}: {{job.partyAName}}</p>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("job.partyBName")}}: {{job.partyBName}}</p>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("job.publishTime")}}: {{publishTime}}</p>
      </Col>

      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("task.days")}}: {{job.days}}</p>

      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("task.price")}}: {{job.price}}</p>
      </Col>
      <Col :xs="24" :sm="12" :md="12" :lg="12">
        <p>{{$t("job.contractTime")}}: {{contractTime}}</p>

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
            publishTime() {
                return moment(this.job.createdTime).format('YYYY-MM-DD HH:mm')
            },
            contractTime() {
                return moment(this.job.contractTime).format('YYYY-MM-DD HH:mm')
            },
            unread() {
                let cc=0
                if (this.job && this.job.totalLogUnread) {
                    cc+= this.job.totalLogUnread
                }
                if (this.job && this.job.totalCompleteUnread) {
                    cc+= this.job.totalCompleteUnread
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
