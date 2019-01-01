<template>
  <Submenu name="5">
    <template slot="title">
      <Icon type="md-person" />
      <span v-if="token">{{username1}}</span>
      <span v-else>{{$t("navigator.signIn")}}</span>
    </template>
    <MenuItem name="5-1" v-if="token">{{$t("navigator.signOut")}}</MenuItem>
    <MenuItem name="5-2" v-else="token">{{$t("navigator.signIn")}}</MenuItem>
  </Submenu>
</template>

<script>
  export default {
    name: "menuUser",
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
