<template>
  <Submenu name="9">
    <template slot="title">
      <Icon class="gogoTitleBarIcon" type="ios-navigate"></Icon>
      {{$t("navigator.secretary")}}
    </template>
    <MenuItem name="menuSecretaryAppliedJobList">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.matchJob")}}
    </MenuItem>
    <MenuItem name="menuSecretaryTopUpPage">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.topUp")}}
    </MenuItem>
    <MenuItem name="menuSecretaryRealnamePage">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.userRealname")}}
    </MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuSecretary"
    }
</script>

<style scoped>
  .gogoTitleBarIcon{
    font-size: 22px;
  }
</style>
