<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.secretaryApplyJobList')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <SecretaryAppliedJobListRow v-for="(item, index) in jobs" :key="index" :job="item">
      </SecretaryAppliedJobListRow>
    </Content>
  </div>
</template>

<script>
    import {apiListAppliedJob} from "../../../api/api";
    import SecretaryAppliedJobListRow from './secretaryAppliedJobListRow'

    export default {
        name: "secretaryAppliedJobList",
        components: {
            SecretaryAppliedJobListRow
        },
        data() {
            return {
                pageIndex: 1,
                pageSize: 20,
                jobs: []
            }
        },
        methods: {
            loadAllData() {
                apiListAppliedJob({
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.jobs = response.data.data.jobs
                    } else {
                        this.$Message.error(this.$t('syserr.' + response.data.errorCode))
                    }
                })
            }
        },
        mounted() {
            this.loadAllData()
        }
    }
</script>

<style scoped>
  @import "../../../assets/gogoStyles.css";
</style>
