<template>
  <Form :label-width="200">
    <FormItem v-show="errInput">
      <Alert type="error" show-icon>{{errMsg}}</Alert>
    </FormItem>
    <FormItem :label="$t('user.email')">
      <Input v-model="emailStr" :placeholder="$t('user.emailPlaceholder')"/>
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
  </Form>
</template>

<script>
    export default {
        name: "registerByEmail",
      data(){
          return{
            errInput:false,
            errMsg:'',
            emailStr:'',
            password:'',
            password2:''
          }
      },
      methods:{
        onRegister(){

        },
        onLogin(){

        }
      }
    }
</script>

<style scoped>

</style>
