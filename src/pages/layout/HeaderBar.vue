<template>
  <Menu mode="horizontal" active-name="1" @on-select="menuClick">
    <Row>
      <Col :xs="4" :sm="2" :md="2" :lg="1">
        <img class="layout-logo" src="../../assets/gogoyang.png"/>
      </Col>
      <Col :xs="4" :sm="2" :md="1" :lg="1">
        <a herf="" class="gogo-title">RPG</a>
      </Col>
      <Col :xs="8" :sm="2" :md="1" :lg="1">
        <a herf="" class="gogo-title">刘洋</a>
      </Col>
      <Col :xs="8" :sm="2" :md="1" :lg="1">
        <Button type="primary">{{$t("command.createNewTask")}}</Button>
      </Col>
      <Col :xs="24" :sm="16" :md="19" :lg="20">
        <div class="layout-nav">
          <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            {{$t("command.myRPG")}}
          </MenuItem>
          <Submenu name="10">
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              {{$t("command.rpgAdministrator")}}
            </template>
            <MenuItem name="10-1">
              <Icon type="ios-analytics"></Icon>
              {{$t("command.matchJob")}}
            </MenuItem>
            <MenuItem name="10-2">
              <Icon type="ios-analytics"></Icon>
              {{$t("command.topUp")}}
            </MenuItem>
          </Submenu>

          <MenuItem name="2">
            <Icon type="ios-analytics"></Icon>
            {{$t("command.appealSquare")}}
          </MenuItem>
          <MenuItem name="4">
            <Icon type="ios-analytics"></Icon>
            {{$t("command.signOut")}}
          </MenuItem>
          <MenuItem name="5">
            <Icon type="ios-analytics"></Icon>
            {{$t("command.settings")}}
          </MenuItem>

            <Submenu name="6">
              <template slot="title">
                <Icon type="ios-paper"></Icon>
                {{$t("header.language")}}
              </template>
              <MenuItem name="6-1">中文</MenuItem>
              <MenuItem name="6-2">English</MenuItem>
            </Submenu>
        </div>
      </Col>
    </Row>
  </Menu>
</template>

<script>
  export default {
    name: "HeaderBar",
    methods:{
      menuClick(name){
        if(name==="6-1"){
          this.$i18n.locale='zh'
        }
        if(name==="6-2"){
          this.$i18n.locale='en'
        }
      }
    }
  }
</script>

<style scoped>
  .layout-logo {
    width: 32px;
    height: 32px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .gogo-title {
    font-size: 18px;
    font-weight: bold;
    color: #475063;
  }

  .layout-nav {
    float: right;
  }
</style>
