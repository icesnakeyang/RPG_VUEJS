<template>
  <Submenu name="3">
    <template slot="title">
      <Badge :count="totalNewJob">
        <a></a>
      </Badge>
      <Icon class="gogoTitleBarIcon" type="md-browsers"/>
      {{$t("navigator.myJob")}}
    </template>
    <MenuItem name="3-1">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.dashboard")}}
    </MenuItem>
    <MenuItem name="3-2">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.myApply")}}
    </MenuItem>
    <MenuItem name="3-3">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.partyA")}}
    </MenuItem>
    <MenuItem name="3-4">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.partyB")}}
      <Badge :count="totalNewJob">
      </Badge>
    </MenuItem>
    <MenuItem name="3-5">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.myPending")}}
    </MenuItem>
    <MenuItem name="3-6">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.myAcceptJob")}}
    </MenuItem>
  </Submenu>
</template>

<script>
  import {apiTotalUnreadNewJob} from "../../../api/api";

  export default {
    name: "menuMyJob",
    data(){
      return{
        totalNewJob:null
      }
    },
    methods: {
      loadAllData() {
        console.log(this.$store.state.token)
        apiTotalUnreadNewJob({}).then((response) => {
          if(response.data.errorCode===0){
            this.totalNewJob=response.data.data.unreadNewJob
          }
        })
      }
    },
    mounted() {
      this.loadAllData()
    }
  }
</script>

<style scoped>
  .gogoTitleBarIcon {
    font-size: 22px;
  }
</style>
