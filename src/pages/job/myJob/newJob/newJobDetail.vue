<template>
  <div>
    <JobDetailTpl v-bind:job="job"></JobDetailTpl>
    <Form :model="data1" :label-width="200">

      <FormItem v-show="!saving">
        <Button type="primary" @click="onAccept">{{$t("job.btAcceptJob")}}</Button>
        <Button type="error" @click="onReject">{{$t("job.btRejectJob")}}</Button>
      </FormItem>
      <FormItem v-show="saving">
        <template>
          <Spin size="large"></Spin>
        </template>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import JobDetailTpl from "../../components/jobDetailTpl"
  import {loadJobDetail} from "../../../../api/api";

  export default {
    name: "newJobDetail",
    components: {
      JobDetailTpl
    },
    data() {
      return {
        job: {},
        data1: {},
        saving: false
      }
    },
    methods: {
      onAccept() {
        console.log(this.job.jobId)
        this.saving=true;
      },
      onReject() {
        console.log(this.job.jobId)
        this.saving=true;
      }
    },
    mounted() {
      loadJobDetail(this.$route.params.jobId).then((response) => {
        console.log(response);
        if (response.data.errorCode == 0) {
          this.job = response.data.data;
        }
      })
    }
  }
</script>

<style scoped>

</style>
