<template>
  <Submenu name="8">
    <template slot="title">
      <Icon class="gogoTitleBarIcon" type="ios-people"/>
      {{ $t('navigator.myTeam') }}
    </template>
    <MenuItem name="menuMyTeamDashboard">
      <Icon type="ios-navigate"></Icon>
      {{ $t('navigator.dashboard') }}
    </MenuItem>
    <MenuItem name="menuMyTeamList">
      <Icon type="ios-navigate"></Icon>
      {{ $t('navigator.myTeam') }}
    </MenuItem>
  </Submenu>
</template>

<script>
export default {
  name: "menuTeam"
}
</script>

<style scoped>
.gogoTitleBarIcon{
  font-size: 22px;
}
</style>
