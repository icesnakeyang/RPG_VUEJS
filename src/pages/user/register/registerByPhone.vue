<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.registerByPhone')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Form :label-width="200">
        <FormItem v-if="errInput">
          <Alert type="error" show-icon v-cloak>{{errMsg}}</Alert>
        </FormItem>
        <FormItem :label="$t('user.phone.phone')">
          <Input @on-blur="onCheckPhone" v-model="phone" :placeholder="$t('user.phone.phoneHolder')"/>
        </FormItem>
        <FormItem :label="$t('user.phone.verifyCode')">
          <Input v-model="code">
            <span v-if="wait" slot="append">{{$t('user.phone.waiting')}}</span>
            <span v-else="wait" slot="append"><a @click="btSendSms">{{$t('user.phone.sendVerifyCode')}}</a></span>
          </Input>
        </FormItem>
        <FormItem :label="$t('user.password')">
          <Input type="password" v-model="password" :placeholder="$t('user.passwordPlaceholder')"/>
        </FormItem>
        <FormItem :label="$t('user.password2')">
          <Input type="password" v-model="password2" :placeholder="$t('user.password2Placeholder')"/>
        </FormItem>
        <FormItem :label="$t('user.realName')">
          <Input type="text" v-model="realName" :placeholder="$t('user.realNameHolder')"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="onRegister">{{$t("user.btRegister")}}</Button>
          <Button type="text" @click="onLogin">{{$t("user.btLogin")}}</Button>
        </FormItem>
        <FormItem>
          <Button type="text" @click="btEmail">{{$t('navigator.registerByEmail')}}</Button>
        </FormItem>
      </Form>
    </Content>
  </div>
</template>

<script>
    import {apiGetPhone, apiGetPhoneVerifyCode, apiRegisterByPhone} from "../../../api/api";
    import {rpgFunc} from "../../../common/rpgfun";

    export default {
        name: "registerByPhone",
        data() {
            return {
                errInput: false,
                errMsg: '',
                phone: '',
                password: '',
                password2: '',
                code: '',
                wait: false,
                realName: ''
            }
        },
        methods: {
            onCheckPhone() {
                if(!rpgFunc.checkMobilePhone(this.phone)){
                    this.errInput = true
                    this.errMsg = this.$t('user.phone.formatError')
                    return
                }else {
                    this.errInput=false
                    this.errMsg = ''
                }
                apiGetPhone({
                    phone: this.phone
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        if (response.data.data.user) {
                            this.errInput = true
                            this.errMsg = this.$t('user.phone.phoneOccupied')
                        } else {
                            this.errInput = false
                            this.errMsg = ''
                        }
                    }
                })
            },
            btSendSms() {
                if(!rpgFunc.checkMobilePhone(this.phone)){
                    this.errInput = true
                    this.errMsg = this.$t('user.phone.formatError')
                    return
                }else{
                    this.errInput=false
                    this.errMsg = ''
                }
                let params = {
                    phone: this.phone
                }
                apiGetPhoneVerifyCode(params).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.$Message.success(this.$t('user.phone.tipSendSMSSuccess'))
                        this.wait = true
                    } else {
                        this.wait = false
                        this.$Message.error(this.$t('user.phone.tipSendSMSFail'))
                    }
                })
            },
            onRegister() {
                if (!this.phone) {
                    this.errInput = true;
                    this.errMsg = this.$t('user.phone.phoneHolder');
                    return
                }
                if (this.password !== this.password2) {
                    this.errInput = true;
                    this.errMsg = this.$t('user.err1');
                    return
                }
                let params={
                    phone: this.phone,
                    code:this.code,
                    password: this.password,
                    realName: this.realName
                }
                apiRegisterByPhone(params).then((response) => {
                    if (response.data.errorCode === 0) {
                        let userInfo = {}
                        userInfo.username = response.data.data.username
                        userInfo.userId = response.data.data.userId
                        userInfo.token = response.data.data.token
                        userInfo.phone = response.data.data.phone
                        userInfo.roleType = response.data.data.roleType
                        this.$store.dispatch('saveToken', userInfo);
                        if (this.$store.state.toUrl) {
                            const theUrl = this.$store.state.toUrl;
                            this.$store.dispatch('clearToUrl');
                            this.$router.push({
                                name: theUrl
                            })
                        } else {
                            this.$router.push({
                                path: '/'
                            })
                        }
                    } else {
                        this.$Message.error(this.$t('syserr.' + response.data.errorCode))
                    }
                });
            },
            onLogin() {
                this.$router.push({
                    name: 'loginPage'
                })
            },
            btEmail() {
                this.$router.push({
                    name: 'registerByEmail'
                })
            }
        }
    }
</script>

<style scoped>
  @import "../../../assets/gogoStyles.css";
</style>
