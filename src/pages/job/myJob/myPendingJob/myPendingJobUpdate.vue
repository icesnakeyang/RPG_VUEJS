<template>
  <div>
    <Breadcrumb :style="{margin:'24px 0'}">
    </Breadcrumb>

    <Form :model="job" :label-width="80">
      <FormItem v-show="errInput">
        <Alert type="error" show-icon>{{errMsg}}</Alert>
      </FormItem>
      <FormItem :label="$t('task.title')">
        <Input v-model="job.title"/>
      </FormItem>
      <FormItem :label="$t('task.code')">
        <Input v-model="job.code"/>
      </FormItem>
      <FormItem :label="$t('task.days')">
        <Input v-model="job.days"/>
      </FormItem>
      <FormItem :label="$t('task.price')">
        <Input v-model="job.price"/>
      </FormItem>

      <FormItem :label="$t('task.detail')">
        <quill-editor v-model="job.detail"
                      :options="editorOption"></quill-editor>
      </FormItem>

      <FormItem v-show="!saving">
        <Button type="primary" @click="onUpdate">{{$t("job.btUpdate")}}</Button>
      </FormItem>
      <FormItem v-show="saving">
        <template>
          <!--<Spin size="small"></Spin>-->
          <!--<Spin></Spin>-->
          <Spin size="large"></Spin>
        </template>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import {apiGetPartyAJob} from "../../../../api/api";
  import {apiUpdatePendingJob} from "../../../../api/api";
  import {quillEditor} from "vue-quill-editor";
  import {ImageResize} from 'quill-image-resize-module'

  export default {
    name: "myPendingJobUpdate",
    components: {
      quillEditor
    },
    data() {
      return {
        job: {},
        errInput: false,
        errMsg: '',
        saving: false,
        editorOption: {
          modules: {
            imageResize: true
          }
        }
      }
    },
    methods: {
      loadAllData() {
        apiGetPartyAJob({
          jobId: this.$store.state.jobId
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.job = response.data.data.job
          }
        }).catch(error => {
        })
      },
      onUpdate() {
        apiUpdatePendingJob({
          jobId: this.job.jobId,
          title: this.job.title,
          code: this.job.code,
          days: this.job.days,
          price: this.job.price,
          jobDetail: this.job.detail
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.$Message.success(this.$t("job.updateTipSucess"))
            this.$router.push({
              name: 'myPendingJobDetail',
              params: {
                jobId: this.job.jobId
              }
            })
          } else {
            this.$Message.error(this.$t("syserr." + response.data.errorCode))
          }
        }).catch(error => {
          this.$Message.error(this.$t("syserr.10099"))
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
