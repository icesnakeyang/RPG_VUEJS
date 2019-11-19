<template>
  <Submenu name="4">
    <template slot="title">
      <Icon class="gogoTitleBarIcon" type="ios-list-box" />
      {{$t("navigator.myTask")}}
    </template>
    <MenuItem name="4-1">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.dashboard")}}
    </MenuItem>
    <MenuItem name="menuTaskPage">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.myTask")}}
    </MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuMyTask"
    }
</script>

<style scoped>
  .gogoTitleBarIcon{
    font-size: 22px;
  }
</style>
