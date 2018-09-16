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
        <Input v-model="formItem.password" :placeholder="$t('register.passwordPlaceholder')"/>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="login">{{$t('register.login')}}</Button>
        <Button type="text" @click="register">{{$t("register.register")}}</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import {loadUser} from "../../api/api";

  export default {
    name: "LoginPage",
    data() {
      return {
        showErr:false,
        errMsg:'',
        formItem: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        if(!this.checkInput()){
          return;
        }
        loadUser({
          username:this.formItem.username,
          password:this.formItem.password
        }).then((response)=>{
          if(response.data.data.user===null){
            this.showErr=true;
            this.errMsg=this.$t('register.err4');
          }else {
            this.$store.dispatch('saveToken', response.data.data.user);
            if(this.$store.state.toUrl){
              const theUrl=this.$store.state.toUrl;
              console.log(theUrl);
              this.$store.dispatch('saveToUrl','');
              this.$router.push({name:theUrl.name, params:theUrl.params})
            }else {
              this.$router.push({path: '/'})
            }
          }
        })
      },
      register(){
        this.$router.push({name:'register'})
      },

      checkInput(){
        if(this.formItem.username===''){
          return false
        }
        return true
      }
    }
  }
</script>

<style scoped>

</style>
