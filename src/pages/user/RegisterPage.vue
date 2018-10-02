<template>
  <div>
    <Form :model="formItem" :label-width="200">
      <FormItem v-show="errInput">
        <Alert type="error" show-icon>{{errMsg}}</Alert>
      </FormItem>
      <FormItem :label="$t('register.username')">
        <Input v-model="formItem.username" :placeholder="$t('register.usernamePlaceholder')"/>
      </FormItem>
      <FormItem :label="$t('register.password')">
        <Input type="password" v-model="formItem.password" :placeholder="$t('register.passwordPlaceholder')"/>
      </FormItem>
      <FormItem :label="$t('register.password2')">
        <Input type="password" v-model="formItem.password2" :placeholder="$t('register.password2Placeholder')"/>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="register">{{$t("register.register")}}</Button>
        <Button type="text" @click="login">{{$t("register.login")}}</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import {registerUser} from "../../api/api";

  export default {
    name: "RegisterPage",
    data() {
      return {
        formItem: {
          username: '',
          password: '',
          password2: ''
        },
        errInput:false,
        errMsg:''
      }
    },
    methods: {
      register() {
        if(!this.formItem.username){
          this.errInput=true;
          this.errMsg=this.$t('register.err2');
          return
        }
        var reg = /^[a-zA-Z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        if(!reg.test(this.formItem.username)){
          this.errInput=true;
          this.errMsg=this.$t('register.err3')
          return
        }
        if(this.formItem.password!==this.formItem.password2){
          this.errInput=true;
          this.errMsg=this.$t('register.err1');
          return
        }
        registerUser({
          username: this.formItem.username,
          password: this.formItem.password
        }).then((response) => {
          if(response.data.errorCode!==0){
            alert('Register error')
          }else {
            console.log(response.data.data)
            this.$store.dispatch('saveToken', response.data.data);
            if(this.$store.state.toUrl){
              const theUrl=this.$store.state.toUrl;
              this.$store.dispatch('saveToUrl','');
              this.$router.push({name:theUrl})
            }else {
              this.$router.push({path: '/'})
            }

            // this.$router.push({name:'jobPlaza'})
          }
        });
      },

      login(){
        this.$router.push({
          name:"login"
        })
      }
    }
  }
</script>

<style scoped>

</style>
