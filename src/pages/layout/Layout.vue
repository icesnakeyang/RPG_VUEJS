<template>
  <div>
    <router-view name = "head"></router-view>
    <router-view name ='content' class="layout"></router-view>
    <router-view name = 'footer'></router-view>
  </div>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style scoped>
  .layout{
    padding: 20px;
  }

</style>
