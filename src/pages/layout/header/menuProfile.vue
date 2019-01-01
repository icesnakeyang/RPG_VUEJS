<template>
  <Submenu name="5">
    <template slot="title">
      <Icon type="ios-navigate"></Icon>
      {{$t('navigator.myProfile')}}
    </template>
    <MenuItem name="5-1">
      <Icon type="ios-navigate"></Icon>
      {{$t('navigator.dashboard')}}
    </MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuMyProfile"
    }
</script>

<style scoped>

</style>
