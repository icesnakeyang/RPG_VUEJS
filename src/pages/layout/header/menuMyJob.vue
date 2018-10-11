<template>
  <Submenu name="10">
    <template slot="title">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.myJob")}}
    </template>
    <MenuItem name="3-2-1">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.myMatch")}}
    </MenuItem>
    <MenuItem name="3-2-2">
    <Icon type="ios-navigate"></Icon>
    {{$t("command.partyA")}}
    </MenuItem>
    <MenuItem name="3-2-3">
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
