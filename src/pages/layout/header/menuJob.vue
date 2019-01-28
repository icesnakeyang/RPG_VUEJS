<template>
  <Submenu name="3">
    <template slot="title">
      <Badge :count="totalUnread">
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
      <Badge :count="totalPartyAUnread"></Badge>
    </MenuItem>
    <MenuItem name="3-4">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.partyB")}}
      <Badge :count="totalPartyBUnread">
      </Badge>
    </MenuItem>
    <MenuItem name="3-5">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.myPending")}}
    </MenuItem>
    <MenuItem name="3-6">
      <Icon type="ios-navigate"></Icon>
      {{$t("navigator.myAcceptJob")}}
      <Badge :count="totalUnreadAccept"></Badge>
    </MenuItem>
  </Submenu>
</template>

<script>
  import {apiTotalMyUnread} from "../../../api/api";

  export default {
    name: "menuMyJob",
    data(){
      return{
        totalPartyAUnread:null,
        totalPartyBUnread:null,
        totalUnreadAccept:null
      }
    },
    computed:{
      totalUnread(){
        return this.totalPartyAUnread+this.totalPartyBUnread+this.totalUnreadAccept
      }
    },
    methods: {
      loadAllData() {
        console.log(this.$store.state.token)
        apiTotalMyUnread({}).then((response) => {
          if(response.data.errorCode===0){
            this.totalPartyAUnread=response.data.data.totalPartyAUnread
            this.totalPartyBUnread=response.data.data.totalPartyBUnread
            this.totalUnreadAccept=response.data.data.totalUnreadAccept
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
