<template>
  <Submenu name="3">
    <template slot="title">
      <Icon class="gogoTitleBarIcon" type="md-browsers" />
      {{$t("navigator.myJob")}}
    </template>
    <MenuItem name="3-1">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.dashboard")}}
    </MenuItem>
    <MenuItem name="3-2">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.myApply")}}
    </MenuItem>
    <MenuItem name="3-3">
    <Icon type="ios-navigate"></Icon>
    {{$t("navigator.partyA")}}
    </MenuItem>
    <MenuItem name="3-4">
    <Icon type="ios-navigate"></Icon>
    {{$t("navigator.partyB")}}
    </MenuItem>
    <MenuItem name="3-5">
    <Icon type="ios-navigate"></Icon>
    {{$t("navigator.myPending")}}
    </MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuMyJob"
    }
</script>

<style scoped>
  .gogoTitleBarIcon{
    font-size: 22px;
  }
</style>
