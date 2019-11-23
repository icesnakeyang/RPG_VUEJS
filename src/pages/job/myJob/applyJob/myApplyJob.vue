<template>
  <div>
    <Breadcrumb :style="{margin:'24px 0'}">
      <BreadcrumbItem>{{$t('navigator.myApply')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content style="min-height: 450px">
      <MyApplyJobRow v-for="apply in applyJobList"
                     v-bind:key="apply.job.jobId"
                     v-bind:jobApply="apply">
      </MyApplyJobRow>
    </Content>
  </div>
</template>

<script>
    import {apiListMyApplyJob} from "../../../../api/api";

    import MyApplyJobRow from "./myApplyJobRow";

    export default {
        name: "myApplyJob",
        components: {
            MyApplyJobRow
        },
        data() {
            return {
                applyJobList: []
            }
        },
        methods: {
            loadAllData() {
                apiListMyApplyJob({
                    pageIndex: 0,
                    pageSize: 100
                }).then((response) => {
                    console.log(response)
                    if (response.data.errorCode === 0) {
                        this.applyJobList = response.data.data.jobList;
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

</style>
