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
  import {quillEditor} from "vue-quill-editor";

  export default {
    name: "editJobLog",
    components: {
      quillEditor
    },
    data() {
      return {}
    },
    methods: {
      loadAllData() {
        apigetjob
      }
    },
    mounted() {
      console.log(this.$route.params.jobLogId)
    }
  }
</script>

<style scoped>

</style>
