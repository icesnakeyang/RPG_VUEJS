<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem to="/">{{$t('navigator.publicJobBoard')}}</BreadcrumbItem>
      <BreadcrumbItem>{{$t('navigator.jobDetail')}}</BreadcrumbItem>
    </Breadcrumb>
    <PublicJobDetailCard :job="job"></PublicJobDetailCard>
    <div style="text-align: center">
      <br><br>
      <Button type="primary" @click="onApplyJob">{{$t("job.btApplyJob")}}</Button>
    </div>
  </div>
</template>

<script>
  import PublicJobDetailCard from './publicJobDetailCard'
  import {apiGetPublicJobDetail} from "../../../api/api";

  export default {
    name: "publicJobDetail",
    components: {
      PublicJobDetailCard
    },
    data() {
      return {
        job: {},
        ip:'',
        cityName:''
      }
    },
    methods: {
      loadAllData() {
        const params={
          ip:this.ip,
          cityName:this.cityName,
          jobId:this.$store.state.jobId
        }
        apiGetPublicJobDetail(params).then((response) => {
          if (response.data.errorCode === 0) {
            this.job = response.data.data.job
          } else {
            this.$Message.error(this.$t('syserr.' + response.data.errorCode))
          }
        })
      },
      onApplyJob() {
        this.$router.push({
          name: 'jobApplyForm',
          params: {
            jobId: this.$store.state.jobId
          }
        })
      },
    },

    mounted() {
      if (this.$route.params.jobId) {
        this.$store.dispatch('saveJobId', this.$route.params.jobId)
      }
      const ip = localStorage.getItem('Ip')
      const cityName = localStorage.getItem('cityname')
      this.ip=ip
      this.cityName=cityName
      this.loadAllData()
    }
  }
</script>

<style scoped>

</style>
