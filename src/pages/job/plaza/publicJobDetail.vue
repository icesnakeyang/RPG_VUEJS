<template>
  <div>
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
        job: {}
      }
    },
    method: {
      onLoadthedata() {
        console.log('here is ok')
      },
      onApplyJob() {
        console.log('apply')
      },
    },

    mounted() {
      console.log(this.$route.params.jobId)
      if (this.$route.params.jobId) {
        this.$store.dispatch('saveJobId', this.$route.params.jobId)
      }
      console.log(2)
      this.onLoadthedata()
    }
  }
</script>

<style scoped>

</style>
