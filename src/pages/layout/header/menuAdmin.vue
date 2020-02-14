<template>
  <div>
    <Submenu name="menuUserActionLog">
      <template slot="title">
        <Icon class="gogoTitleBarIcon" type="ios-navigate"></Icon>
        {{$t("navigator.userActionLog")}}
      </template>
      <MenuItem name="menuUserActionLogStatistic">
        <Icon type="ios-navigate"></Icon>
        {{$t("navigator.userActionLogStatistic")}}
      </MenuItem>
      <MenuItem name="menuUserActionLogList">
        <Icon type="ios-navigate"></Icon>
        {{$t("navigator.userActionLogList")}}
      </MenuItem>
    </Submenu>
    <Submenu name="menuUserWithdraw">
      <template slot="title">
        <Icon class="gogoTitleBarIcon" type="ios-navigate"></Icon>
        {{$t("navigator.userWithdraw")}}
      </template>
      <MenuItem name="menuUserWithdrawApply">
        <Icon type="ios-navigate"></Icon>
        {{$t("navigator.userWithdrawApply")}}
      </MenuItem>
    </Submenu>
  </div>
</template>

<script>
  export default {
    name: "menuAdmin",
    computed: {
      isSecretary() {
        if (this.$store.state.roleType === 'SECRETARY') {
          return true;
        }
        return false;
      }
    }
  }
</script>

<style scoped>
  .gogoTitleBarIcon {
    font-size: 22px;
  }
</style>
