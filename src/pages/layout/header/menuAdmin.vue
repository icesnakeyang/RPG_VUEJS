<template>
  <Submenu name="7">
    <template slot="title">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.rpgAdministrator")}}
    </template>
    <MenuItem name="7-1">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.adminManager")}}
    </MenuItem>
    <MenuItem name="7-2">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.rpgSecretary")}}
    </MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuAdmin"
    }
</script>

<style scoped>

</style>
