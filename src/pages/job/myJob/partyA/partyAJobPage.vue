<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.partyA')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <JobPartyAListTpl v-for="job in jobList"
                        v-bind:key="job.jobId"
                        v-bind:job="job"
      ></JobPartyAListTpl>
    </Content>
  </div>
</template>

<script>
    import JobPartyAListTpl from './jobPartyAListTpl'
    import {apiListMyPartyAJob} from "../../../../api/api";

    export default {
        name: "partyAJobPage",
        components: {
            JobPartyAListTpl
        },
        data() {
            return {
                pageIndex: 1,
                pageSize: 10,
                jobList: []
            }
        },
        mounted() {
            apiListMyPartyAJob({
                pageIndex: this.pageIndex,
                pageSize: this.pageSize
            }).then((response) => {
                if (response.data.errorCode === 0) {
                    this.jobList = response.data.data.jobs
                } else {
                    this.$Message.error(this.$t('syserr.' + response.data.errorCode))
                }
            })
        }
    }
</script>

<style scoped>
  @import "../../../../assets/gogoStyles.css";
</style>
