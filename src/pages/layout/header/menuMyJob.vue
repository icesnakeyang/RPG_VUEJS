<template>
  <Submenu name="10">
    <template slot="title">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.myJob")}}
    </template>
    <MenuItem name="10-1">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.newJob")}}
    </MenuItem>
    <MenuItem name="10-2">
    <Icon type="ios-navigate"></Icon>
    {{$t("command.partyA")}}
    </MenuItem>
    <MenuItem name="10-3">
    <Icon type="ios-navigate"></Icon>
    {{$t("command.partyB")}}
    </MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuMyJob"
    }
</script>

<style scoped>

</style>
