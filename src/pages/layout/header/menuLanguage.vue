<template>
  <Submenu name="2">
    <template slot="title">
      <Icon class="gogoTitleBarIcon" type="ios-globe-outline" />
      {{$t("navigator.language")}}
    </template>
    <MenuItem name="lanChinese">中文</MenuItem>
    <MenuItem name="lanEnglish">English</MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuLanguage",
        methods:{
        }
    }
</script>

<style scoped>
  .gogoTitleBarIcon{
    font-size: 22px;
  }
</style>
