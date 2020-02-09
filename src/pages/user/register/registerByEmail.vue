<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.registerByEmail')}}</BreadcrumbItem>
    </Breadcrumb>

    <Content class="gogo_content">
      <Form :label-width="200">
        <FormItem v-show="errInput">
          <Alert type="error" show-icon>{{errMsg}}</Alert>
        </FormItem>
        <FormItem :label="$t('user.email.email')">
          <Input @on-blur="onCheckEail" v-model="emailStr" :placeholder="$t('user.emailPlaceholder')"/>
        </FormItem>
        <FormItem :label="$t('user.password')">
          <Input type="password" v-model="password" :placeholder="$t('user.passwordPlaceholder')"/>
        </FormItem>
        <FormItem :label="$t('user.password2')">
          <Input type="password" v-model="password2" :placeholder="$t('user.password2Placeholder')"/>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="onRegister">{{$t("user.btRegister")}}</Button>
          <Button type="text" @click="onLogin">{{$t("user.btLogin")}}</Button>
        </FormItem>
        <FormItem>
          <Button type="text" @click="btPhone">{{$t('navigator.registerByPhone')}}</Button>
        </FormItem>
      </Form>
    </Content>
  </div>
</template>

<script>
    import {apiRegisterByEmail} from "../../../api/api";
    import {apiGetEmailByEmail} from "../../../api/api";

    export default {
        name: "registerByEmail",
        data() {
            return {
                errInput: false,
                errMsg: '',
                emailStr: '',
                password: '',
                password2: ''
            }
        },
        methods: {
            onCheckEail() {
                apiGetEmailByEmail({
                    email: this.emailStr
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        if (response.data.data.email) {
                            this.errInput = true
                            this.errMsg = this.$t('user.err4')
                        } else {
                            this.errInput = false
                            this.errMsg = ''
                        }
                    }
                })
            },
            onRegister() {
                if (!this.emailStr) {
                    this.errInput = true;
                    this.errMsg = this.$t('user.err2');
                    return
                }
                const reg = /^[a-zA-Z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
                if (!reg.test(this.emailStr)) {
                    this.errInput = true;
                    this.errMsg = this.$t('user.err3')
                    return
                }
                if (this.password !== this.password2) {
                    this.errInput = true;
                    this.errMsg = this.$t('user.err1');
                    return
                }
                apiRegisterByEmail({
                    email: this.emailStr,
                    loginPassword: this.password
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        let userInfo = {}
                        if (response.data.data.realName) {
                            userInfo.username = response.data.data.realName
                        } else {
                            userInfo.username = response.data.data.email
                        }
                        userInfo.userId = response.data.data.userId
                        userInfo.token = response.data.data.token
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
            btPhone() {
                this.$router.push({
                    name: 'registerByPhone'
                })
            }
        }
    }
</script>

<style scoped>
  @import "../../../assets/gogoStyles.css";
</style>
