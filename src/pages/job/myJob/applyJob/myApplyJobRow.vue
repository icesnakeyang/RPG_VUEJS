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
      <div v-if="reject">
        <div class="gogo_row1">
          <Tag color="error">{{$t('common.status.reject')}}</Tag>
        </div>
        <Input type="textarea" v-model="jobApply.apply.processRemark" readonly></Input>
      </div>
      <div v-if="accept">
        <div class="gogo_row1">
          <Tag color="primary">{{$t('common.status.agree')}}</Tag>
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
      },
      process() {
        console.log(this.jobApply.apply.processResult)
        if (this.jobApply.apply.processResult) {
          console.log('true')
          return true
        } else {
          console.log('false')
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
        console.log(this.jobApply.apply.processResult)
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
