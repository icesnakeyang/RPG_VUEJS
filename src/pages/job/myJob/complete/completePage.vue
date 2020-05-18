<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.jobComplete')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <div v-if="isProgress">
        <!--当前用户为乙方，可申请完成-->
        <Button type="info" v-if="isPartyB" @click="onCreateJobComplete" class="card">{{$t("job.jobComplete.create")}}
        </Button>

        <!--当前用户为甲方，且乙方已经申请了完成，且未处理，可拒绝-->
        <div v-if="isPartyA">
          <Button type="error" v-if="isWaitingProcess" @click="rejectModal=true" class="card">
            {{$t("job.jobComplete.reject")}}
          </Button>
          <!--当前用户为甲方，可验收通过-->
          <Button type="success" @click="acceptModal=true" class="card">{{$t("job.jobComplete.accept")}}</Button>
        </div>
      </div>
      <div>
        <CompleteRow v-for="row in jobCompleteList"
                     v-bind:key="row.completeId"
                     v-bind:complete="row"
        ></CompleteRow>
      </div>
    </Content>

    <div>
      <Modal
        v-model="rejectModal"
        :title='$t("common.tipTitleQuestion")'
        :mask-closable="false"
        @on-ok="onRejectComplete"
        @on-cancel="onRejectCancel">
        <p>{{$t("job.jobComplete.rejectRemark")}}</p>
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
        <p>{{$t("job.jobComplete.acceptRemark")}}</p>
        <Input v-model="acceptRemark" type="textarea" :autosize="{minRows: 5,maxRows: 15}"></Input>
      </Modal>
    </div>
  </div>
</template>

<script>
    import {apiListMyComplete} from "../../../../api/api";
    import {apiSetCompleteReadTime} from "../../../../api/api";
    import CompleteRow from "./completeRow"
    import {apiRejectComplete} from "../../../../api/api";
    import {apiAcceptComplete} from "../../../../api/api";
    import {apiGetJobTinyByJobId} from "../../../../api/api";

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
                job: {},
                pageIndex:1,
                pageSize:10
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

            isPartyA() {
                if (this.job.partyAId.toString() === this.$store.state.userId.toString()) {
                    return true
                }
                return false
            },

            isPartyB() {
                if (this.job.partyBId.toString() === this.$store.state.userId.toString()) {
                    return true
                }
                return false
            },

            /**
             * 是否有完成申请等待甲方处理
             */
            isWaitingProcess() {
                if (this.jobCompleteList) {
                    for (let row of this.jobCompleteList) {
                        if (!row.result) {
                            return true
                        }
                    }
                }
            }
        },
        methods: {
            loadAllData() {
                apiListMyComplete({
                    jobId: this.$store.state.jobId,
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize
                }).then((response) => {
                    console.log(response)
                    if (response.data.errorCode === 0) {
                        this.jobCompleteList = response.data.data
                    }
                })

                apiGetJobTinyByJobId({
                    jobId: this.$store.state.jobId
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.job = response.data.data.job
                    }
                })
            },
            setReadTime() {
                apiSetCompleteReadTime({
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
                apiRejectComplete({
                    jobId: this.$store.state.jobId,
                    processRemark: this.rejectRemark
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.loadAllData()
                    } else {
                        this.$Message.error(this.$t('syserr.' + response.data.errorCode))
                    }
                })
            },

            onRejectCancel() {
                return false
            },

            onAcceptComplete() {
                apiAcceptComplete({
                    jobId: this.$store.state.jobId,
                    processRemark: this.acceptRemark
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.loadAllData()
                    } else {
                        this.$Message.error(this.$t("syserr." + response.data.errorCode));
                    }
                })
            }
        },
        mounted() {
            if (this.$route.params.jobId) {
                this.$store.dispatch('saveJobId', (this.$route.params.jobId))
            }
            this.setReadTime()
            this.loadAllData()
        }
    }
</script>

<style scoped>
  @import "../../../../assets/gogoStyles.css";

  .card {
    margin: 20px;
  }
</style>
