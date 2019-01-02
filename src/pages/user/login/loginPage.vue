<template>
  <div>
    <Form :label-width="200">
      <FormItem v-show="showErr">
        <Alert type="error" show-icon>{{errMsg}}</Alert>
      </FormItem>
      <FormItem :label="$t('user.username')">
        <!--<div @click="onBlurUsername">lsdkfj</div>-->
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
  </div>
</template>

<script>
  import {apiLoginByEmail} from "../../../api/api";

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
        /**
         * todo
         * 这里需要判断用户名是email，还是手机号码，或者别的可能的情况，
         * 不同地区，同国家的用户，可能需要不同的登录策略，
         * 或者，不同的区域会调用不同的服务器等。
         */
        //目前暂时只考虑email登录
        apiLoginByEmail({
          email: this.username,
          password: this.password
        }).then((response) => {
          console.log(response)
          if (response.data.errorCode === 0) {
            let user=response.data.data;
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
          }else{
            this.$Message.error(this.$t('syserr.'+response.data.errorCode))
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
