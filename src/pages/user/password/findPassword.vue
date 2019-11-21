<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.findPassword')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <div :style="{width:'500px'}">
        <Form :label-width="200">
          <FormItem :label="$t('user.phone.phone2')">
            <Input v-model="phone" :placeholder="$t('user.phone.tipFindPasswordPhone')"></Input>
          </FormItem>
          <FormItem :label="$t('user.phone.verifyCode')">
            <Input v-model="code">
              <span v-if="wait" slot="append">{{$t('user.phone.waiting')}}</span>
              <span v-else="wait" slot="append"><a @click="btSendSms">{{$t('user.phone.sendVerifyCode')}}</a></span>
            </Input>
          </FormItem>
          <FormItem :label="$t('user.phone.newPassword')">
            <Input v-model="newPassword" :placeholder="$t('user.phone.tipNewPassword')"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="btSubmit">{{$t('common.submit')}}</Button>
          </FormItem>
        </Form>
      </div>
    </Content>
  </div>
</template>

<script>
    import {apiGetPhoneVerifyCode, apiResetPassword} from "../../../api/api";

    export default {
        name: "findPassword",
        data() {
            return {
                phone: '',
                code: '',
                wait: false,
                newPassword: ''
            }
        },
        methods: {
            btSendSms() {
                console.log('send sms')
                let params = {
                    phone: this.phone
                }
                apiGetPhoneVerifyCode(params).then((response) => {
                    console.log(response)
                    if (response.data.errorCode === 0) {
                        this.$Message.success('Send sms code successful')
                        this.wait = true
                    } else {
                        this.wait = false
                        this.$Message.error('Send sms code failed')
                    }
                })
            },
            btSubmit() {
                console.log(this.phone)
                console.log(this.code)
                console.log(this.newPassword)

                const params = {
                    phone: this.phone,
                    code: this.code,
                    newPass: this.newPassword
                }

                apiResetPassword(params).then((response) => {
                    console.log(response)
                    if (response.data.errorCode === 0) {
                        this.$Message.success(this.$t('user.phone.tipResetPasswordSuccess'))
                    } else {
                        this.$Message.error(this.$t('user.phone.tipResetPasswordFail'))
                    }
                })


            }
        }
    }
</script>

<style scoped>
  @import "../../../assets/gogoStyles.css";
</style>
