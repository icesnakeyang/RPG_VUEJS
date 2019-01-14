<template>
  <div>
    <Alert>{{$t('admin.loginPage.tip1')}}</Alert>
    <Form :model="formItem" :label-width="200">
      <FormItem v-show="showErr">
        <Alert type="error" show-icon>{{errMsg}}</Alert>
      </FormItem>
      <FormItem :label="$t('admin.loginPage.username')">
        <Input v-model="formItem.username" :placeholder="$t('admin.loginPage.usernamePlaceholder')"/>
      </FormItem>
      <FormItem :label="$t('admin.loginPage.password')">
        <Input type="password" v-model="formItem.password" :placeholder="$t('admin.loginPage.passwordPlaceholder')"/>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="login">{{$t('admin.loginPage.btLogin')}}</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import {apiAdminLogin} from "../../api/api";

  export default {
    name: "adminLogin",
    data() {
      return {
        showErr: false,
        errMsg: '',
        formItem: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        if (!this.checkInput()) {
          return;
        }
        apiAdminLogin({
          loginName: this.formItem.username,
          password: this.formItem.password
        }).then((response) =>{
          if (response.data.errorCode === 0) {
            this.$store.dispatch('saveAdmin', response.data.data.admin);

            if (this.$store.state.toUrl) {
              const theUrl = this.$store.state.toUrl;
              this.$store.dispatch('saveToUrl', '');
              this.$router.push({
                name: theUrl.name,
                params: theUrl.params
              })
            } else {
              this.$router.push({
                name:'secretaryDashboard'
              })
            }
          }else {
            this.errMsg = this.$t("syserr." + response.data.errorCode)
            this.showErr = true;
            return;
          }
        })
      },
      checkInput() {
        if (this.formItem.username === '') {
          return false
        }
        return true
      }
    }
  }
</script>

<style scoped>

</style>
