<template>
  <Submenu name="2">
    <template slot="title">
      <Icon type="ios-globe-outline" />
      {{$t("navigator.language")}}
    </template>
    <MenuItem name="2-1">中文</MenuItem>
    <MenuItem name="2-2">English</MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuLanguage"
    }
</script>

<style scoped>

</style>
