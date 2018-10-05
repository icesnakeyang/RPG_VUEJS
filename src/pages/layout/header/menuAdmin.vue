<template>
  <Submenu name="7">
    <template slot="title">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.rpgAdministrator")}}
    </template>
    <MenuItem name="7-1">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.adminManager")}}
    </MenuItem>
    <MenuItem name="7-2" v-if="isSecretary">
      <Icon type="ios-navigate"></Icon>
      {{$t("command.rpgSecretary")}}
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
