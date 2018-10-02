<template>
  <Submenu name="3">
    <template slot="title">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.myRPG")}}
    </template>
    <MenuItem name="3-6">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.myApply")}}
    </MenuItem>
    <MenuItem name="3-1">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.myTask")}}
    </MenuItem>
    <MenuItem name="3-2">
        <Icon type="ios-navigate"></Icon>
        {{$t("command.myJob")}}
    </MenuItem>

    <MenuItem name="3-3">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.myProfile")}}
    </MenuItem>

    <MenuItem name="3-4">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.myAccount")}}
    </MenuItem>

    <MenuItem name="3-5">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.myHonor")}}
    </MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuMyRpg"
    }
</script>

<style scoped>

</style>
