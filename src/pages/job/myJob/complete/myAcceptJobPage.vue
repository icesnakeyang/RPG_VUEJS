<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.myAcceptJob')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Tabs value="name1">
        <TabPane label="甲方任务" name="name1">
          <JobRow v-for="(item, index) in jobsA"
                  :job="item"
                  :key="index"></JobRow>
        </TabPane>
        <TabPane label="乙方任务" name="name2">
          <JobRow v-for="(item, index) in jobsB"
                  :job="item"
                  :key="index"></JobRow>
        </TabPane>
      </Tabs>
    </Content>
  </div>
</template>

<script>
    import {apiListMyPartyAAcceptJob} from "../../../../api/api";
    import JobRow from './jobRow'
    import {apiListMyPartyBAcceptJob} from "../../../../api/api";
    import {apiSetAcceptReadTime} from "../../../../api/api";

    export default {
        name: "myAcceptJobPage",
        components: {
            JobRow
        },
        data() {
            return {
                jobsA: [],
                jobsB: []
            }
        },
        methods: {

            loadAllData() {
                apiListMyPartyAAcceptJob({
                    pageIndex: 0,
                    pageSize: 20
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.jobsA = response.data.data.jobs
                    }
                })

                apiListMyPartyBAcceptJob({
                    pageIndex: 0,
                    pageSize: 20
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.jobsB = response.data.data.jobs
                    }
                })

                apiSetAcceptReadTime({}).then((response) => {

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
