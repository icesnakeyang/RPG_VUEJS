<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>{{$t('navigator.signIn')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{minHeight: '450px'}">
      <Form :label-width="200">
        <FormItem v-show="showErr">
          <Alert type="error" show-icon>{{errMsg}}</Alert>
        </FormItem>
        <FormItem :label="$t('user.username')">
          <Input v-model="username"
                 :placeholder="$t('user.usernamePlaceholder')"/>
        </FormItem>
        <FormItem :label="$t('user.password')">
          <Input type="password" v-model="password" :placeholder="$t('user.passwordPlaceholder')"/>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="onLogin">{{$t('user.btLogin')}}</Button>
          <Button type="text" @click="onRegister">{{$t("user.btRegister")}}</Button>
        </FormItem>
      </Form>
    </Content>
  </div>
</template>

<script>
    import {apiLogin} from "../../../api/api";

    export default {
        name: "loginPage",
        data() {
            return {
                showErr: false,
                errMsg: '',
                username: '',
                password: ''
            }
        },
        methods: {
            onLogin() {
                if (!this.checkInput()) {
                    return;
                }

                apiLogin({
                    loginName: this.username,
                    password: this.password
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        let user = response.data.data;
                        this.$store.dispatch('saveToken', user);
                        if (this.$store.state.toUrl) {
                            const theUrl = this.$store.state.toUrl;
                            this.$store.dispatch('clearToUrl');
                            this.$router.push({
                                name: theUrl.name,
                                params: theUrl.params
                            })
                        } else {
                            this.$router.push({path: '/'})
                        }
                    } else {
                        this.$Message.error(this.$t('syserr.' + response.data.errorCode))
                    }
                })
            },

            onRegister() {
                this.$router.push({
                    name: 'registerByEmail'
                })
            },

            checkInput() {
                if (this.username === '') {
                    return false
                }
                return true
            }
        }
    }
</script>

<style scoped>

</style>
