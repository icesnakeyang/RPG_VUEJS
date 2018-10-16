<template>
  <div>
    <Form :model="complete" :label-width="200">
      <FormItem v-show="errInput">
        <Alert type="error" show-icon>{{errMsg}}</Alert>
      </FormItem>
      <FormItem :label="$t('jobComplete.content')">
        <Input type="textarea" v-model="complete.content"
               :autosize="{minRows: 5,maxRows: 15}"/>
      </FormItem>

      <FormItem v-show="!saving">
        <Button type="primary" @click="onCreateComplete">{{$t("jobComplete.create")}}</Button>
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
  import {createCompleteApi} from "../../../../api/api";

  export default {
    name: "createComplete",
    data() {
      return {
        complete: {},
        errInput: false,
        errMsg: '',
        saving: false
      }
    },
    methods: {
      onCreateComplete() {
        if (!this.$store.state.jobId) {
          return
        }
        if (!this.complete.content) {
          return;
        }
        createCompleteApi({
          jobId: this.$store.state.jobId,
          content: this.complete.content
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.$router.push({
              name: 'completePage',
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
