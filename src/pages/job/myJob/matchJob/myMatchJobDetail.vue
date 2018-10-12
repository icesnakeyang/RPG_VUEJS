<template>
  <div>
    <JobDetailTpl v-bind:job="job"></JobDetailTpl>
    <Form :model="data1" :label-width="200">
      <FormItem v-show="!saving">
        <Button type="primary" @click="onAccept">{{$t("job.btAcceptJob")}}</Button>
        <Button type="error" @click="onReject">{{$t("job.btRejectJob")}}</Button>
      </FormItem>
      <FormItem v-show="saving">
        <template>
          <Spin size="large"></Spin>
        </template>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import JobDetailTpl from "../../components/jobDetailTpl"
  import {loadJobDetail} from "../../../../api/api";
  import {acceptNewJob} from "../../../../api/api";
  import {rejectNewJob} from "../../../../api/api";

  export default {
    name: "myMatchJobDetail",
    components: {
      JobDetailTpl
    },
    data() {
      return {
        job: {},
        data1: {},
        saving: false
      }
    },
    methods: {
      onAccept() {
        console.log(this.job.jobId)
        this.saving = true;
        acceptNewJob({
          jobId: this.job.jobId
        }).then((response) => {
          console.log(response)
        })
      },
      onReject() {
        this.$Modal.confirm({
          title: this.$t("common.tipTitleQuestion"),
          content: this.$t("admin.tip1"),
          okText: this.$t("common.ok"),
          cancelText: this.$t("common.cancel"),
          onOk: () => {
            console.log(this.job.jobId)
            this.saving = true;
            rejectNewJob({
              jobId: this.job.jobId
            }).then((response) => {
              console.log(response)
            })
          },
          onCancel: () => {
            return false;
          }
        })
      }
    },
    mounted() {
      loadJobDetail(this.$route.params.jobId).then((response) => {
        console.log(response);
        if (response.data.errorCode == 0) {
          this.job = response.data.data.job;
        }
      })
    }
  }
</script>

<style scoped>

</style>
