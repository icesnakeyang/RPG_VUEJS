<template>
  <div>
    <JobDetailTpl v-bind:job="job"></JobDetailTpl>
    <Form :model="data1" :label-width="200">
      <FormItem v-show="!saving">
        <Button type="primary" @click="onAccept">{{$t("job.btAcceptJob")}}</Button>
        <Button type="error" @click="rejectModal = true">{{$t("job.btRejectJob")}}</Button>
      </FormItem>
      <FormItem v-show="saving">
        <template>
          <Spin size="large"></Spin>
        </template>
      </FormItem>
    </Form>

    <Modal
      v-model="rejectModal"
      :title='$t("common.tipTitleQuestion")'
      :mask-closable="false"
      @on-ok="onReject"
      @on-cancel="onRejectCancel">
      <p>{{$t("jobMatchLog.rejectRemark")}}</p>
      <Input v-model="rejectRemark" type="textarea" :autosize="{minRows: 5,maxRows: 15}"></Input>
    </Modal>

  </div>
</template>

<script>
  import JobDetailTpl from "../partyA/jobDetailTpl"
  import {apiGetJobDetail} from "../../../../api/api";
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
        saving: false,
        rejectModal: false,
        rejectRemark: ''
      }
    },
    methods: {
      onAccept() {
        this.$Modal.confirm({
          title: this.$t("common.tipTitleQuestion"),
          content: this.$t("jobMatchLog.tipAccept"),
          okText: this.$t("common.ok"),
          cancelText: this.$t("common.cancel"),
          onOk: () => {
            this.saving = true;
            acceptNewJob({
              jobId: this.job.jobId
            }).then((response) => {
            })
          },
          onCancel: () => {
            return false
          }
        })
      },
      onReject() {
        this.saving = true;
        rejectNewJob({
          jobId: this.job.jobId,
          remark:this.rejectRemark
        }).then((response) => {
        })
      },
      onRejectCancel(){
        return false;
      }
    },
    mounted() {
      if(this.$route.params.jobId){
        if(this.$store.state.jobId===this.$route.params.jobId){
        }else{
          this.$store.dispatch('saveJobId', this.$route.params.jobId)
        }
      }
      apiGetJobDetail(this.$store.state.jobId).then((response) => {
        if (response.data.errorCode == 0) {
          this.job = response.data.data.job;
        }
      })
    }
  }
</script>

<style scoped>

</style>
