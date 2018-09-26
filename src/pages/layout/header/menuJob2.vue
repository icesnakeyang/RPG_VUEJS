<template>
  <Submenu name="1-3">
    <template slot="title">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.myJob")}}
    </template>
    <MenuItem name="1-3-1">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.newJob")}}
    </MenuItem>
    <MenuItem name="1-3-2">
    <Icon type="ios-navigate"></Icon>
    {{$t("command.partyA")}}
    </MenuItem>
    <MenuItem name="1-3-3">
    <Icon type="ios-navigate"></Icon>
    {{$t("command.partyB")}}
    </MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuJob2"
    }
</script>

<style scoped>

</style>
