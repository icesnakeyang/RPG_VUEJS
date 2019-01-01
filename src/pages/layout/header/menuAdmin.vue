<template>
  <Submenu name="8">
    <template slot="title">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.administrator")}}
    </template>
    <MenuItem name="8-1">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.administrator")}}
    </MenuItem>
  </Submenu>
</template>

<script>
    export default {
        name: "menuAdmin",
      computed:{
          isSecretary(){
            if(this.$store.state.roleType==='SECRETARY'){
              return true;
            }
            return false;
          }
      }
    }
</script>

<style scoped>

</style>
