<template>
  <Submenu name="7">
    <template slot="title">
      <Icon type="ios-navigate"></Icon>
      {{$t('navigator.myHonor')}}
    </template>
    <MenuItem name="7-1">
      <Icon type="ios-navigate"></Icon>
      {{$t('navigator.dashboard')}}
    </MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuHonor"
    }
</script>

<style scoped>

</style>
