<template>
  <Form :model="stop" :label-width="200">
    <FormItem v-show="errInput">
      <Alert type="error" show-icon>{{errMsg}}</Alert>
    </FormItem>
    <FormItem :label="$t('jobStop.content')">
      <Input type="textarea" v-model="stop.content"
             :autosize="{minRows: 5,maxRows: 15}"/>
    </FormItem>
    <FormItem :label="$t('jobStop.refund')">
      <Input type="text" v-model="stop.refund" />
    </FormItem>

    <FormItem v-show="!saving">
      <Button type="primary" @click="onCreateStop">{{$t("common.submit")}}</Button>
    </FormItem>
    <FormItem v-show="saving">
      <template>
        <!--<Spin size="small"></Spin>-->
        <!--<Spin></Spin>-->
        <Spin size="large"></Spin>
      </template>
    </FormItem>
  </Form>
</template>

<script>
  import {createStopAPI} from "../../../../api/api";

  export default {
        name: "createStop",
      data(){
          return{
            stop: {},
            errInput: false,
            errMsg: '',
            saving: false
          }
      },
      methods:{
        onCreateStop() {
          console.log(1)
          if (!this.$store.state.jobId) {
            return
          }
          if (!this.stop.content) {
            return;
          }
          console.log(2)
          createStopAPI({
            jobId: this.$store.state.jobId,
            content: this.stop.content,
            refund:this.stop.refund
          }).then((response) => {
            if (response.data.errorCode === 0) {
              this.$router.push({
                name: 'stopPage',
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
