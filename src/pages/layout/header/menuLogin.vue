<template>
  <Submenu name="5">
    <template slot="title">
      <Icon type="md-person" />
      <span v-if="token">{{username1}}</span>
      <span v-else>{{$t("command.signIn")}}</span>
    </template>
    <MenuItem name="5-1" v-if="token">{{$t("command.signOut")}}</MenuItem>
    <MenuItem name="5-2" v-else="token">{{$t("command.signIn")}}</MenuItem>
  </Submenu>
</template>

<script>
  export default {
    name: "menuLogin",
    computed: {
      token() {
        return this.$store.state.token
      },
      username1() {
        if(this.$store.state.username) {
          return this.$store.state.username;
        }else {
          return this.$store.state.loginName;
        }
      }
    }
  }
</script>

<style scoped>

</style>
