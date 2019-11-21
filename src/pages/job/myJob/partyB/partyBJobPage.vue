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
                jobList: []
            }
        },
        methods: {
            loadAllData() {
                apiListMyPartyBJob({}).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.jobList = response.data.data.content
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
