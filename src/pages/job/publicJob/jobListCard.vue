<template>
  <Card class="card">
    <p slot="title">
      <a @click="goJobDetail(job.jobId)">
        {{job.title}}</a>
    </p>
    <p>
      <Icon type="ios-bookmark" color="#2b85e4"/>
      {{$t("task.code")}}:{{job.code}}
    </p>
    <p>
      <Icon type="md-person" color="#2b85e4"/>
      {{$t("task.createdUserName")}}: {{job.partyAName}}
    </p>
    <p>
      <Icon type="md-time" color="#2b85e4"/>
      {{$t("task.createdTime")}}: {{createdTime}}
    </p>
    <p>
      <Icon type="md-alarm" color="#2b85e4"/>
      {{$t("task.days")}}: {{job.days}}
    </p>
    <p>
      <Icon type="logo-usd" color="#2b85e4"/>
      {{$t("task.price")}}: {{job.price}}
    </p>
  </Card>
</template>

<script>
    import moment from "moment";

    export default {
        name: "jobListCard",
        props: [
            'job'
        ],
        computed: {
            createdTime() {
                return moment(this.job.createdTime).format('YYYY-MM-DD HH:mm');
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
                            name: 'myPendingJobDetail',
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
  .tt {
    background: #2b85e4;
  }
</style>
