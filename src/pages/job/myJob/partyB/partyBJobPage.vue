<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.partyB')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <JobPartyBListTpl v-for="job in jobList"
                        v-bind:key="job.jobId"
                        v-bind:job="job"
      ></JobPartyBListTpl>
    </Content>
  </div>
</template>

<script>
    import JobPartyBListTpl from "./jobPartyBListTpl"
    import {apiListMyPartyBJob} from "../../../../api/api";

    export default {
        name: "partyBJobPage",
        components: {
            JobPartyBListTpl
        },
        data() {
            return {
                pageIndex:1,
                pageSize:10,
                jobList: []
            }
        },
        methods: {
            loadAllData() {
                apiListMyPartyBJob({
                    pageIndex:this.pageIndex,
                    pageSize:this.pageSize
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.jobList = response.data.data
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
  @import "../../../../assets/gogoStyles.css";
</style>
