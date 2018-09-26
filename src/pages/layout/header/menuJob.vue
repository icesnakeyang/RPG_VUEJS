<template>
  <Submenu name="1">
    <template slot="title">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.myRPG")}}
    </template>
    <MenuItem name="1-1">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.myTask")}}
    </MenuItem>
    <MenuItem name="1-3">
        <Icon type="ios-navigate"></Icon>
        {{$t("command.myJob")}}
    </MenuItem>

    <MenuItem name="1-2">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.myProfile")}}
    </MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuJob"
    }
</script>

<style scoped>

</style>
