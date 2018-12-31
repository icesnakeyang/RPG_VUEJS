<template>
  <Submenu name="6">
    <template slot="title">
      <Icon type="ios-globe-outline" />
      {{$t("navigator.language")}}
    </template>
    <MenuItem name="6-1">中文</MenuItem>
    <MenuItem name="6-2">English</MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuLanguage"
    }
</script>

<style scoped>

</style>
