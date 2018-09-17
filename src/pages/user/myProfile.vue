<template>
  <div>
    <Form :model="form" :label-width="200">
      <FormItem v-show="errInput">
        <Alert type="error" show-icon>{{errMsg}}</Alert>
      </FormItem>
      <FormItem :label="$t('user.username')">
        <Input v-model="profile.username" />
      </FormItem>
      <FormItem :label="$t('user.realName')">
        <Input v-model="profile.realName" />
      </FormItem>
      <FormItem :label="$t('user.phone')">
        <Input v-model="user.phone" />
      </FormItem>
      <FormItem :label="$t('user.email')">
        <Input v-model="profile.email" />
      </FormItem>
      <FormItem>
        <Button type="primary" @click="register">{{$t("register.register")}}</Button>
        <Button type="text" @click="login">{{$t("register.login")}}</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    name: "myProfile",
    data() {
      return {
        form:{},
        errInput:false,
        errMsg:'',
        profile:{}
      }
    }
  }
</script>

<style scoped>

</style>
