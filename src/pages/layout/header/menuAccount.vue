<template>
  <Submenu name="6">
    <template slot="title">
      <Icon type="ios-navigate"></Icon>
      {{$t('navigator.myAccount')}}
    </template>
    <MenuItem name="6-1">
      <Icon type="ios-navigate"></Icon>
      {{$t('navigator.dashboard')}}
    </MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuAccount"
    }
</script>

<style scoped>

</style>
