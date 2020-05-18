<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>{{$t('navigator.publicJobBoard')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <JobListCard v-for="(item, index) in jobs" :key="index" :job="item" style="margin-top: 10px"></JobListCard>
    </Content>
  </div>
</template>

<script>
    import {apiListPublicJob} from "../../../api/api";
    import JobListCard from './jobListCard'

    export default {
        name: "publicJobPage",
        components: {
            JobListCard
        },
        data() {
            return {
                pageIndex: 1,
                pageSize: 10,
                jobs: []
            }
        },
        methods: {
            loadAllData() {
                apiListPublicJob({
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
