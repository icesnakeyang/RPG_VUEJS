<template>
  <div>
    <div v-if="isProgress">
      <Button v-if="action.canCreate" type="info" @click="onCreateJobStop" class="card">{{$t("jobStop.create")}}
      </Button>
      <Button v-if="action.canReject" type="error" @click="rejectModal=true" class="card">{{$t("jobStop.reject")}}
      </Button>
      <Button v-if="action.canAccept" type="success" @click="acceptModal=true" class="card">{{$t("jobStop.accept")}}
      </Button>
    </div>
    <div>
      <StopRow v-for="row in jobStopList"
               v-bind:key="row.stopId"
               v-bind:stop="row"
      ></StopRow>
    </div>

    <div>
      <Modal
        v-model="rejectModal"
        :title='$t("common.tipTitleQuestion")'
        :mask-closable="false"
        @on-ok="onRejectStop"
        @on-cancel="onRejectCancel">
        <p>{{$t("jobStop.rejectRemark")}}</p>
        <Input v-model="rejectRemark" type="textarea" :autosize="{minRows: 5,maxRows: 15}"></Input>
      </Modal>
    </div>

    <div>
      <Modal
        v-model="acceptModal"
        :title='$t("common.tipTitleQuestion")'
        :mask-closable="false"
        @on-ok="onAcceptStop"
        @on-cancel="onRejectCancel">
        <p>{{$t("jobStop.acceptRemark")}}</p>
        <Input v-model="acceptRemark" type="textarea" :autosize="{minRows: 5,maxRows: 15}"></Input>
      </Modal>
    </div>
  </div>
</template>

<script>
  import StopRow from "./stopRow"
  import {loadStopList} from "../../../../api/api";
  import {apiGetJobDetailTiny} from "../../../../api/api";
  import {rejectStop} from "../../../../api/api";
  import {acceptStop} from "../../../../api/api";
  import {setStopReadTime} from "../../../../api/api";

  export default {
    name: "stopPage",
    components: {
      StopRow
    },
    data() {
      return {
        jobStopList: [],
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
      },
      action() {
        let canCreate = true
        let canReject = false
        let canAccept = false
        for (let row of this.jobStopList) {
          if (!row.result) {
            canCreate = false
            if (row.createdUserId !== this.$store.state.userId) {
              canReject = true
              canAccept = true
            }
          }
        }
        const action = {
          canCreate: canCreate,
          canReject: canReject,
          canAccept: canAccept
        }
        console.log(action)
        return action
      }
    },
    methods: {
      loadData() {
        loadStopList({
          jobId: this.$store.state.jobId,
          pageIndex: 0,
          pageSize: 100
        }).then((response) => {
          console.log(response)
          if (response.data.errorCode === 0) {
            this.jobStopList = response.data.data.content
            this.setReadTime()
          }
        })
        apiGetJobDetailTiny(this.$store.state.jobId).then((response) => {
          if (response.data.errorCode === 0) {
            this.job = response.data.data.job
          }
        })
      },
      onCreateJobStop() {
        this.$router.push({
          name: 'createStop',
          params: {
            jobId: this.$store.state.jobId
          }
        })
      },
      onRejectCancel() {

      },
      onAcceptStop() {
        acceptStop({
          jobId: this.$store.state.jobId,
          processRemark: this.acceptRemark
        }).then((response) => {
          console.log(response)
          if (response.data.errorCode !== 0) {
            this.$Message.error(this.$t("syserr." + response.data.errorCode));
          } else {
            this.$Message.success(this.$t("syserr.10075"))
          }
        })
      },
      onRejectStop() {
        rejectStop({
          jobId: this.$store.state.jobId,
          processRemark: this.rejectRemark
        }).then((response) => {
          console.log(response)
          if (response.data.errorCode !== 0) {
            this.$Message.error(this.$t("syserr." + response.data.errorCode))
          } else {
            this.$Message.success(this.$t("syserr.10073"))
          }
        })
      },
      setReadTime() {
        setStopReadTime({
          jobId: this.$store.state.jobId
        }).then((response) => {
        })
      },
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
