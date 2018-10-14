<template>
  <div>
    <Form :model="jobLog" :label-width="200">
      <FormItem v-show="errInput">
        <Alert type="error" show-icon>{{errMsg}}</Alert>
      </FormItem>
      <FormItem :label="$t('jobLog.content')">
        <Input type="textarea" v-model="jobLog.content"
               :autosize="{minRows: 5,maxRows: 15}" />
      </FormItem>

      <FormItem v-show="!saving">
        <Button type="primary" @click="onCreateLog">{{$t("jobLog.create")}}</Button>
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
  import {createLog} from "../../../../api/api";

  export default {
    name: "createJobLog",
    data() {
      return {
        jobLog: {},
        errInput: false,
        errMsg:'',
        saving:false
      }
    },
    methods:{
      onCreateLog(){
        if(!this.$store.state.jobId){
          return
        }
        if(!this.jobLog.content){
          return;
        }
        createLog({
          jobId:this.$store.state.jobId,
          content:this.jobLog.content
        }).then((response)=>{
          if(response.data.errorCode===0){
            this.$router.push({
              name: 'jobLogPage',
              params: {
                jobId: this.$store.state.jobId
              }
            })
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
