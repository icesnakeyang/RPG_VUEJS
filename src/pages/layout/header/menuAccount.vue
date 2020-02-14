<template>
  <Submenu name="6">
    <template slot="title">
      <Icon class="gogoTitleBarIcon" type="logo-usd" />
      {{$t('navigator.myAccount')}}
    </template>
    <MenuItem name="menuMyAccountDashboard">
      <Icon type="ios-navigate"></Icon>
      {{$t('navigator.dashboard')}}
    </MenuItem>
    <MenuItem name="menuMyAccountPage">
      <Icon type="ios-navigate"></Icon>
      {{$t('navigator.myAccount')}}
    </MenuItem>
    <MenuItem name="menuMyWithdraw">
      <Icon type="ios-navigate"></Icon>
      {{$t('navigator.myWithdrawList')}}
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
