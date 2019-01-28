<template>
  <Submenu name="6">
    <template slot="title">
      <Icon class="gogoTitleBarIcon" type="logo-usd" />
      {{$t('navigator.myAccount')}}
    </template>
    <MenuItem name="6-1">
      <Icon type="ios-navigate"></Icon>
      {{$t('navigator.dashboard')}}
    </MenuItem>
    <MenuItem name="6-2">
      <Icon type="ios-navigate"></Icon>
      {{$t('navigator.myAccount')}}
    </MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuAccount"
    }
</script>

<style scoped>
  .gogoTitleBarIcon{
    font-size: 22px;
  }
</style>
