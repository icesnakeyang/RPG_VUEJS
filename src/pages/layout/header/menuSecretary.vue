<template>
  <Submenu name="8">
    <template slot="title">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.rpgSecretary")}}
    </template>
    <MenuItem name="8-1">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.matchJob")}}
    </MenuItem>
    <MenuItem name="8-2">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.topUp")}}
    </MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuSecretary"
    }
</script>

<style scoped>

</style>
