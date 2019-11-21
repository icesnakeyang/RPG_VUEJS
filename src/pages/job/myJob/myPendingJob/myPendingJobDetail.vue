<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem to="myPendingJobPage">{{$t('navigator.myPending')}}</BreadcrumbItem>
      <BreadcrumbItem>{{$t('navigator.jobDetail')}}</BreadcrumbItem>
    </Breadcrumb>
    <JobDetailCard v-bind:job="job"></JobDetailCard>
    <div style="text-align: center" v-show="jobNotApplied">
      <br><br>
      <Button type="primary" @click="onUpdateJob">{{$t("job.btUpdate")}}</Button>
      <Button type="error" @click="onDeleteJob">{{$t("job.btDelete")}}</Button>
    </div>
  </div>
</template>

<script>
  import {apiGetMyPendingJob} from "../../../../api/api";
  import {apiDeletePendingJob} from "../../../../api/api";
  import JobDetailCard from "../detail/jobDetailCard"

  export default {
    name: "myPendingJobDetail",
    components: {
      JobDetailCard
    },
    data() {
      return {
        job: {}
      }
    },
    computed:{
      jobNotApplied(){
        if(this.job.jobApplyNum) {
          if (this.job.jobApplyNum !== 0) {
            return false
          }
        }
        return true
      }
    },

    methods: {
      loadAllData() {
        apiGetMyPendingJob({
          jobId: this.$store.state.jobId
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.job = response.data.data.job
            console.log(this.job)
          }
        })
      },
      onUpdateJob() {
        this.$router.push({
          name:'myPendingJobUpdate',
          params:{
            jobId:this.job.jobId
          }
        })
      },
      onDeleteJob(){
            this.$Modal.confirm({
              title: this.$t('common.tipTitleQuestion'),
              content: this.$t('job.deleteTip'),
              onOk: () => {
                apiDeletePendingJob({
                  jobId:this.job.jobId
                }).then((response)=>{
                  if(response.data.errorCode===0){
                    this.$Message.info(this.$t('job.deleteTipSuccess'));
                    this.$router.push({
                      name:'myPendingJobPage'
                    })
                  }else {
                    this.$Message.error(this.$t('syserr.'+response.data.errorCode));
                  }
                })

              },
              onCancel: () => {

              }
            });
      }
    },
    mounted() {
      if (this.$route.params.jobId) {
        this.$store.dispatch("saveJobId", this.$route.params.jobId)
      }
      this.loadAllData()
    }
  }
</script>

<style scoped>

</style>
