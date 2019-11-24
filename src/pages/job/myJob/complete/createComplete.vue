<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem to="completePage">{{$t('navigator.jobComplete')}}</BreadcrumbItem>
      <BreadcrumbItem>{{$t('navigator.jobCompleteCreate')}}</BreadcrumbItem>
    </Breadcrumb>

    <Content class="gogo_content">

      <Form :model="complete" :label-width="150">
        <FormItem v-show="errInput">
          <Alert type="error" show-icon>{{errMsg}}</Alert>
        </FormItem>
        <FormItem :label="$t('job.jobComplete.content')">
          <Input type="textarea" v-model="complete.content"
                 :autosize="{minRows: 5,maxRows: 15}"/>
        </FormItem>

        <FormItem v-show="!saving">
          <Button type="primary" @click="onCreateComplete">{{$t("job.jobComplete.create")}}</Button>
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
    import {apiCreateComplete} from "../../../../api/api";

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
                apiCreateComplete({
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
