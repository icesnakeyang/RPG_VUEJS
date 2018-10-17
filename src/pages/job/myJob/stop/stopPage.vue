<template>
  <div>
    <div v-if="isProgress">
      <Button type="info" @click="onCreateJobStop" class="card">{{$t("jobStop.create")}}</Button>
      <Button type="error" @click="rejectModal=true" class="card">{{$t("jobStop.reject")}}</Button>
      <Button type="success" @click="acceptModal=true" class="card">{{$t("jobStop.accept")}}</Button>
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
  import {loadJobTiny} from "../../../../api/api";

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
        rejectRemark:'',
        acceptRemark:'',
        job:{}
      }
    },
    computed:{
      isProgress(){
        if (this.job.status === "PROGRESS") {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      loadData() {
        loadStopList({
          jobId:this.$store.state.jobId,
          pageIndex:0,
          pageSize:100
        }).then((response)=>{
          console.log(response)
          if(response.data.errorCode===0){
            this.jobStopList=response.data.data.content
            console.log(this.jobStopList)
          }
        })
        loadJobTiny(this.$store.state.jobId).then((response) => {
          if (response.data.errorCode === 0) {
            this.job = response.data.data.job
          }
        })
      },
      onCreateJobStop() {

      },
      onRejectCancel() {

      },
      onAcceptStop() {

      },
      onRejectStop(){

      }
    },
    mounted() {
      this.loadData()
    }
  }
</script>

<style scoped>
  .card{
    margin: 20px;
  }
</style>
