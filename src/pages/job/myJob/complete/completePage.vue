<template>
  <div>
    <div v-if="isProgress">
      <Button type="info" @click="onCreateJobComplete" class="card">{{$t("jobComplete.create")}}</Button>
      <Button type="error" @click="rejectModal=true" class="card">{{$t("jobComplete.reject")}}</Button>
      <Button type="success" @click="acceptModal=true" class="card">{{$t("jobComplete.accept")}}</Button>
    </div>
    <div>
      <CompleteRow v-for="row in jobCompleteList"
                   v-bind:key="row.completeId"
                   v-bind:complete="row"
      ></CompleteRow>
    </div>

    <div>
      <Modal
        v-model="rejectModal"
        :title='$t("common.tipTitleQuestion")'
        :mask-closable="false"
        @on-ok="onRejectComplete"
        @on-cancel="onRejectCancel">
        <p>{{$t("jobComplete.rejectRemark")}}</p>
        <Input v-model="rejectRemark" type="textarea" :autosize="{minRows: 5,maxRows: 15}"></Input>
      </Modal>
    </div>

    <div>
      <Modal
        v-model="acceptModal"
        :title='$t("common.tipTitleQuestion")'
        :mask-closable="false"
        @on-ok="onAcceptComplete"
        @on-cancel="onRejectCancel">
        <p>{{$t("jobComplete.acceptRemark")}}</p>
        <Input v-model="acceptRemark" type="textarea" :autosize="{minRows: 5,maxRows: 15}"></Input>
      </Modal>
    </div>
  </div>
</template>

<script>
  import {loadCompletList} from "../../../../api/api";
  import {setCompleteReadTime} from "../../../../api/api";
  import CompleteRow from "./completeRow"
  import {rejectComplete} from "../../../../api/api";
  import {acceptComplete} from "../../../../api/api";
  import {loadJobTiny} from "../../../../api/api";

  export default {
    name: "completePage",
    components: {
      CompleteRow
    },
    data() {
      return {
        jobCompleteList: [],
        rejectModal: false,
        acceptModal: false,
        rejectRemark: '',
        acceptRemark: '',
        job: {}
      }
    },
    computed: {
      isProgress() {
        if (this.job.status === "PROGRESS") {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      loadData() {
        loadCompletList({
          jobId: this.$store.state.jobId,
          pageIndex: 0,
          pageSize: 100
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.jobCompleteList = response.data.data.content
            this.setReadTime()
          }
        })

        loadJobTiny(this.$store.state.jobId).then((response) => {
          if (response.data.errorCode === 0) {
            this.job = response.data.data.job
            console.log(this.job)
          }
        })
      },
      setReadTime() {
        setCompleteReadTime({
          jobId: this.$store.state.jobId
        }).then((response) => {
        })
      },
      onCreateJobComplete() {
        this.$router.push({
          name: 'createComplete',
          params: {
            jobId: this.$store.state.jobId
          }
        })
      },
      onRejectComplete() {
        rejectComplete({
          jobId: this.$store.state.jobId,
          processRemark: this.processRemark
        }).then((response) => {
          console.log(response)
          if (response.data.errorCode !== 0) {
            this.$Message.error(this.$t("syserr." + response.data.errorCode))
          }

        })
      },

      onRejectCancel() {
        return false
      },

      onAcceptComplete() {
        acceptComplete({
          jobId: this.$store.state.jobId
        }).then((response) => {
          console.log(response)
          if (response.data.errorCode !== 0) {
            this.$Message.error(this.$t("syserr." + response.data.errorCode));
          }
        })
      }
    },
    mounted() {
      this.loadData()
    }
  }
</script>

<style scoped>
  .card {
    margin: 20px;
  }
</style>
