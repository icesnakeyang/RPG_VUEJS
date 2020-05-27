<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.jobLogCreate')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Form :model="jobLog" :label-width="80">
        <FormItem v-show="errInput">
          <Alert type="error" show-icon>{{errMsg}}</Alert>
        </FormItem>
        <FormItem :label="$t('job.log.content')">
          <quill-editor v-model="jobLog.content"></quill-editor>
        </FormItem>

        <FormItem v-show="!saving">
          <Button type="primary" @click="onCreateLog">{{$t("job.log.btCreate")}}</Button>
        </FormItem>
        <FormItem v-show="saving">
          <template>
            <!--<Spin size="small"></Spin>-->
            <!--<Spin></Spin>-->
            <Spin size="large"></Spin>
          </template>
        </FormItem>
      </Form>
    </Content>
  </div>
</template>

<script>
  import {apiCreateLog} from "../../../../api/api";
  import {quillEditor} from "vue-quill-editor";

  export default {
    name: "createJobLog",
    components: {
      quillEditor
    },
    data() {
      return {
        jobLog: {},
        errInput: false,
        errMsg: '',
        saving: false
      }
    },
    methods: {
      onCreateLog() {
        if (!this.$store.state.jobId) {
          return
        }
        if (!this.jobLog.content) {
          return;
        }
        const params = {
          jobId: this.$store.state.jobId,
          content: this.jobLog.content
        }
        apiCreateLog(params).then((response) => {
          if (response.data.errorCode === 0) {
            this.$router.push({
              name: 'jobLogPage',
              params: {
                jobId: this.$store.state.jobId
              }
            })
          } else {
            this.$Message.error(this.$t('syserr.' + response.data.errorCode))
          }
        })
      }
    }
  }
</script>

<style scoped>
  @import "../../../../assets/gogoStyles.css";
</style>
