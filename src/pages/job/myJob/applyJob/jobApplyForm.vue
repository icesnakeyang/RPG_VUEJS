<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.applyJob')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Alert>
        {{$t('job.applyTitle1')}}
        <template slot="desc">{{$t('job.applyTitle2')}}</template>
      </Alert>
      <Card class="card">
        <p slot="title">
          {{job.title}}
        </p>
        <Form :model="userInfo" :label-width="140">
          <FormItem v-show="errInput">
            <Alert type="error" show-icon>{{errMsg}}</Alert>
          </FormItem>
          <FormItem :label="$t('job.applyContent')">
            <Input v-model="applyContent" type="textarea"
                   :autosize="{minRows: 2,maxRows: 10}"></Input>
          </FormItem>
          <FormItem :label="$t('user.realName')">
            <Input v-model="userInfo.realName"/>
          </FormItem>
          <FormItem :label="$t('user.phone.phone')">
            <Input v-model="userInfo.phone"/>
          </FormItem>
          <FormItem :label="$t('user.email.email')">
            <Input v-model="userInfo.email"/>
          </FormItem>
          <FormItem v-show="!saving">
            <Button type="primary" @click="clickConfirm">{{$t("user.btSaveUserInfo")}}</Button>
          </FormItem>
          <FormItem v-show="saving">
            <template>
              <!--<Spin size="small"></Spin>-->
              <!--<Spin></Spin>-->
              <Spin size="large"></Spin>
            </template>
          </FormItem>
        </Form>
      </Card>
    </Content>
  </div>
</template>

<script>
    import {apiGetUserInfo} from "../../../../api/api";
    import {apiSaveContactInfo} from "../../../../api/api";
    import {apiApplyJob} from "../../../../api/api";
    import {apiGetJobTinyByJobId} from "../../../../api/api";

    export default {
        name: "jobApplyForm",
        data() {
            return {
                userInfo: {},
                errInput: false,
                errMsg: '',
                saving: false,
                applyContent: '',
                job: {}
            }
        },
        computed: {},
        methods: {
            loadAllData() {
                apiGetUserInfo({}).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.userInfo = response.data.data.user
                    } else {
                        this.$Message.error(this.$t('syserr.' + response.data.errorCode))
                        return
                    }
                })

                apiGetJobTinyByJobId({
                    jobId: this.$store.state.jobId
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.job = response.data.data.job
                    } else {
                        this.$Message.error(this.$t('syserr.' + response.data.errorCode))
                        return
                    }
                })
            },

            clickConfirm() {
                this.saving = true;
                apiSaveContactInfo({
                    realName: this.userInfo.realName,
                    phone: this.userInfo.phone,
                    email: this.userInfo.email
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        apiApplyJob({
                            jobId: this.$store.state.jobId,
                            content: this.applyContent
                        }).then((response) => {
                            if (response.data.errorCode === 0) {
                                this.$router.push({
                                    name: 'applyJobSuccess'
                                });
                            } else {
                                this.errMsg = this.$t("syserr." + response.data.errorCode);
                                this.errInput = true
                                this.saving = false
                            }
                        })
                    } else {
                        this.errMsg = this.$t("syserr." + response.data.errorCode);
                        this.errInput = true
                        this.saving = false
                    }
                })

            }
        },
        mounted() {
            if (this.$route.params.jobId) {
                this.$store.dispatch('saveJobId', this.$route.params.jobId)
            }
            this.loadAllData()
        }
    }
</script>

<style scoped>
  @import "../../../../assets/gogoStyles.css";

  .card {
    margin: 40px;
  }

</style>
