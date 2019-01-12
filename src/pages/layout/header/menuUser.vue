<template>
  <Submenu name="1">
    <template slot="title">
      <Icon class="gogoTitleBarIcon" type="md-person" />
      <span v-if="token">{{username}}</span>
      <span v-else>{{$t("navigator.signIn")}}</span>
    </template>
    <MenuItem name="1-1" v-if="token">{{$t("navigator.signOut")}}</MenuItem>
    <MenuItem name="1-2" v-else="token">{{$t("navigator.signIn")}}</MenuItem>
  </Submenu>
</template>

<script>
  export default {
    name: "menuUser",
    computed: {
      token() {
        return this.$store.state.token
      },
      username() {
        if(this.$store.state.username) {
          return this.$store.state.username;
        }else {
          return this.$store.state.email;
        }
      }
    }
  }
</script>

<style scoped>
  .gogoTitleBarIcon{
    font-size: 22px;
  }
</style>
