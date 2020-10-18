<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.jobLogUpdate')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Form :label-width="80">
        <FormItem v-show="errInput">
          <Alert type="error" show-icon>{{errMsg}}</Alert>
        </FormItem>
        <FormItem :label="$t('job.log.content')">
          <quill-editor v-model="jobLog.content"></quill-editor>
        </FormItem>

        <FormItem v-show="!saving">
          <Button type="primary" @click="onUpdateLog">{{$t("job.log.btUpdate")}}</Button>
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
  import {apiGetJobLog, apiUpdateMyJobLog} from "../../../../api/api";

  export default {
    name: "editJobLog",
    components: {
      quillEditor
    },
    data() {
      return {
        jobLogId:'',
        errInput: false,
        errMsg: '',
        saving: false,
        jobLog:{}
      }
    },
    methods: {
      loadAllData() {
        let params={
          jobLogId:this.jobLogId
        }
        apiGetJobLog(params).then((res)=>{
          if(res.data.errorCode===0){
            console.log(res)
            this.jobLog=res.data.data.jobLog
          }else{
            this.$Message.error(this.$t('syserr.'+res.data.errorCode))
          }
        }).catch(()=>{
          this.$Message.error(this.$t('syserr.'+30000))
        })
      },

      onUpdateLog(){
        const params={
          jobLogId:this.jobLogId,
          content:this.jobLog.content
        }
        apiUpdateMyJobLog(params).then((res)=>{
          if(res.data.errorCode===0){
            this.$Message.success(this.$t('job.log.tip5'))
          }else{
            this.$Message.error(this.$t('syserr.'+res.data.errorCode))
          }
        }).catch(()=>{
          this.$Message.error(this.$t('syserr.3000'))
        })
      }
    },
    mounted() {
      console.log(this.$route.params.jobLogId)
      if(this.$route.params.jobLogId){
        this.jobLogId=this.$route.params.jobLogId
      }
      this.loadAllData()
    }
  }
</script>

<style scoped>
  @import "../../../../assets/gogoStyles.css";
</style>
