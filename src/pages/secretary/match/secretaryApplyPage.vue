<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem to="secretaryAppliedJobList">{{$t('navigator.secretaryApplyJobList')}}</BreadcrumbItem>
      <BreadcrumbItem>{{$t('navigator.secretaryApplyPage')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <div class="card">
        <Tag type="dot" color="primary">{{job.title}}</Tag>
        <SecretaryApplyPageRow v-for="(item, index) in applies"
                               :apply="item"
                               :key="index">
        </SecretaryApplyPageRow>
      </div>
    </Content>
  </div>
</template>

<script>
  import {apiListApplyByJobId} from "../../../api/api";
  import SecretaryApplyPageRow from "./secretaryApplyPageRow"
  import {apiGetApplyJobTiny} from "../../../api/api";

  export default {
    name: "secretaryApplyPage",
    components: {
      SecretaryApplyPageRow
    },
    data() {
      return {
        applies: [],
        job: {}
      }
    },
    methods: {
      loadAllData() {
        apiListApplyByJobId({
          pageIndex: 1,
          pageSize: 20,
          jobId: this.$store.state.jobId
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.applies = response.data.data.applyList
            console.log(this.applies)
          } else {
            this.$Message.error(this.$t("syserr." + response.data.errorCode))
          }
        })
        apiGetApplyJobTiny({
          jobId: this.$store.state.jobId
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.job = response.data.data.job
          } else {
            this.$Message.error(this.$t("syserr." + response.data.errorCode))
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
  @import "../../../assets/gogoStyles.css";

  .card {
    margin: 20px;
  }
</style>
