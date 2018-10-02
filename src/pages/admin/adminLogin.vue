<template>
  <div>
    <Form :model="formItem" :label-width="200">
      <FormItem v-show="showErr">
        <Alert type="error" show-icon>{{errMsg}}</Alert>
      </FormItem>
      <FormItem :label="$t('register.username')">
        <Input v-model="formItem.username" :placeholder="$t('register.usernamePlaceholder')"/>
      </FormItem>
      <FormItem :label="$t('register.password')">
        <Input type="password" v-model="formItem.password" :placeholder="$t('register.passwordPlaceholder')"/>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="login">{{$t('register.login')}}</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import {adminLogin} from "../../api/api";

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
        console.log('login')
        adminLogin({
          loginName: this.formItem.username,
          password: this.formItem.password
        }).then((response) => {
          console.log(response);
          if (response.data.errorCode !== 0) {
            this.errMsg = this.$t("syserr." + response.data.errorCode)
            this.showErr = true;
            return;
          }
          this.$store.dispatch('saveToken', response.data.data);
          console.log(this.$store.state)
          if (this.$store.state.toUrl) {
            const theUrl = this.$store.state.toUrl;
            this.$store.dispatch('saveToUrl', '');
            this.$router.push({name: theUrl.name, params: theUrl.params})
          } else {
            this.$router.push({path: '/'})
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
