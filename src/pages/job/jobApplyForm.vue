<template>
  <div>
    <Card class="card">
      <p slot="title">
        {{jobTitle}}
      </p>
      <Form :model="userInfo" :label-width="140">
        <FormItem v-show="errInput">
          <Alert type="error" show-icon>{{errMsg}}</Alert>
        </FormItem>
        <FormItem :label="$t('user.realName')">
          <Input v-model="userInfo.realName"/>
        </FormItem>
        <FormItem :label="$t('user.phone')">
          <Input v-model="userInfo.phone"/>
        </FormItem>
        <FormItem :label="$t('user.email')">
          <Input v-model="userInfo.email"/>
        </FormItem>
        <FormItem v-show="!saving">
          <Button type="primary" @click="clickConfirm">{{$t("user.confirm")}}</Button>
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

  </div>
</template>

<script>
  import {loadUserInfo} from "../../api/api";
  import {saveContactInfo} from "../../api/api";
  import {applyJob} from "../../api/api";

  export default {
    name: "jobApplyForm",
    data() {
      return {
        userInfo: {},
        errInput: false,
        errMsg: '',
        saving: false
      }
    },
    computed: {
      jobTitle() {
        return this.$route.params.jobTitle
      }
    },
    methods: {
      clickConfirm() {
        console.log(this.userInfo)
        this.saving = true;
        saveContactInfo({
          realName: this.userInfo.realName,
          phone: this.userInfo.phone,
          email: this.userInfo.email
        }).then((response) => {
          console.log(response)
          if (response.data.errorCode === 0) {
            console.log(this.$route.params)
            applyJob({
              jobId: this.$route.params.jobId
            }).then((response) => {
              console.log(response)
              if (response.data.errorCode === 0) {
                this.$router.push({
                  name: 'applyJobSuccess'
                });
              } else {
                this.errMsg = this.$t("syserr." + response.data.errorCode);
                this.errInput = true
              }
            })
          } else {
            this.errMsg = this.$t("syserr." + response.data.errorCode);
            this.errInput = true
          }
        })

      }
    },
    mounted() {
      console.log('mounted')
      console.log(this.$route.params)


      loadUserInfo().then((response) => {
        this.userInfo = response.data.data
      })
    }
  }
</script>

<style scoped>
  .card {
    margin: 40px;
  }

</style>
