<template>
  <Submenu name="9">
    <template slot="title">
      <Icon class="gogoTitleBarIcon" type="ios-navigate"></Icon>
      {{$t("navigator.secretary")}}
    </template>
    <MenuItem name="9-1">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.matchJob")}}
    </MenuItem>
    <MenuItem name="9-2">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.topUp")}}
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
