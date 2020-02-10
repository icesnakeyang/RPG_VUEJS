<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem to="/">{{$t('navigator.publicJobBoard')}}</BreadcrumbItem>
      <BreadcrumbItem>{{$t('navigator.jobDetail')}}</BreadcrumbItem>
    </Breadcrumb>
    <PublicJobDetailCard :job="job"></PublicJobDetailCard>
    <div style="text-align: center">
      <br><br>
      <div v-if="isPending">
        <Button type="primary" @click="onUpdateJob">{{$t("job.btUpdate")}}</Button>
      </div>
    </div>
  </div>
</template>

<script>
  import PublicJobDetailCard from './publicJobDetailCard'
  import {apiGetPublicJobDetail} from "../../../api/api";

  export default {
    name: "publicJobDetailPartyA",
    components: {
      PublicJobDetailCard
    },
    data() {
      return {
        job: {}
      }
    },
    computed: {
      isPending() {
        if (this.job.status === 'PENDING') {
          return true
        }
        return false
      }
    },
    methods: {
      loadAllData() {
        apiGetPublicJobDetail({
          jobId: this.$store.state.jobId
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.job = response.data.data.job
          } else {
            this.$Message.error(this.$t('syserr.' + response.data.errorCode))
          }
        })
      },
      onUpdateJob() {
        this.$router.push({
          name: 'jobApplyForm',
          params: {
            jobId: this.$store.state.jobId
          }
        })
      }
    },
    mounted() {
      if (this.$route.params.jobId) {
        this.$store.dispatch('saveJobId', this.$route.params.jobId)
      }
      this.loadAllData()
    }
  }
</script>

<style scoped>

</style>
