<template>
  <Card class="card">
    <p slot="title">
      <a @click="onGoJobDetail(jobApply.job.jobId)">
        {{jobApply.job.title}}</a>
    </p>
    <p>{{$t("job.applyTime")}}: {{applyTime}}</p>
    <Input type="textarea" v-model="jobApply.apply.content" readonly></Input>
    <Divider/>
    <div v-if="process">
      <div>
        <p>{{$t('job.jobApply.process.time')}}：{{processTime}}</p>
      </div>
      <div v-if="reject">
        <div class="gogo_row1">
          <p>{{$t('job.jobApply.process.result')}}：
            <Tag color="error">{{$t('common.status.reject')}}</Tag>
          </p>
        </div>
        <Input type="textarea" v-model="jobApply.apply.processRemark" readonly></Input>
      </div>
      <div v-if="accept">
        <div class="gogo_row1">
          <p>{{$t('job.jobApply.process.result')}}：
            <Tag color="primary">{{$t('common.status.agree')}}</Tag>
          </p>
        </div>
        <Input type="textarea" v-model="jobApply.apply.processRemark" readonly></Input>
      </div>
    </div>
    <div v-else="process">
      <div class="gogo_row1">
        <Tag color="blue">{{$t('common.status.unProcess')}}</Tag>
      </div>
    </div>
  </Card>
</template>

<script>
    import moment from "moment";
    import {rpgFunc} from "../../../../common/rpgfun";

    export default {
        name: "myApplyJobRow",
        props: {
            jobApply: {}
        },
        computed: {
            publishTime() {
                return moment(this.jobApply.job.createdTime).format('YYYY-MM-DD HH:mm')
            },
            applyTime() {
                return moment(this.jobApply.apply.applyTime).format('YYYY-MM-DD HH:mm')
            },
            readTime() {
                if (this.jobApply.apply.readTime) {
                    return rpgFunc.formatTime(this.jobApply.apply.readTime)
                } else {
                    return this.$t("common.unRead");
                }
            },
            process() {
                if (this.jobApply.apply.processResult) {
                    return true
                } else {
                    return false
                }
            },
            reject() {
                if (this.jobApply.apply.processResult === 'REJECT') {
                    return true
                } else {
                    return false
                }
            },
            accept() {
                if (this.jobApply.apply.processResult === 'ACCEPT') {
                    return true
                } else {
                    return false
                }
            },
            processResult() {
                if (!this.jobApply.apply.processResult) {
                    return this.$t('common.status.unProcess')
                }
                if (this.jobApply.apply.processResult === 'REJECT') {
                    return this.$t('common.status.reject')
                }
                if (this.jobApply.apply.processResult === 'ACCEPT') {
                    return this.$t('common.status.agree')
                }
            },
            processTime() {
                if (this.jobApply.apply.processTime) {
                    return moment(this.jobApply.apply.processTime).format('YYYY-MM-DD HH:mm')
                }
            }
        },
        methods: {
            onGoJobDetail(item) {
                this.$router.push({
                    name: 'myApplyJobDetail',
                    params: {
                        jobId: item
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
    margin: 20px;
  }

  .gogo_row1 {
    padding: 5px;
  }

  .gogo_row2 {
    padding-top: 4px;
    text-align: left;
  }
</style>
