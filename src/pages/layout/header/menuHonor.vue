<template>
  <Submenu name="7">
    <template slot="title">
      <Icon class="gogoTitleBarIcon" type="ios-star" />
      {{$t('navigator.myHonor')}}
    </template>
    <MenuItem name="7-1">
      <Icon type="ios-navigate"></Icon>
      {{$t('navigator.dashboard')}}
    </MenuItem>
    <MenuItem name="7-2">
      <Icon type="ios-navigate"></Icon>
      {{$t('navigator.myHonor')}}
    </MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuHonor"
    }
</script>

<style scoped>
  .gogoTitleBarIcon{
    font-size: 22px;
  }
</style>
