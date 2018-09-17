<template>
  <Menu mode="horizontal" active-name="1" @on-select="menuClick">
    <Row>
      <Col :xs="4" :sm="2" :md="2" :lg="2">
        <img class="layout-logo" src="../../assets/gogoyang.png"/>
      </Col>
      <Col :xs="4" :sm="2" :md="1" :lg="1">
        <a herf="" class="gogo-title" @click="clickRPG">RPG</a>
      </Col>
      <Col :xs="8" :sm="2" :md="1" :lg="1">
        <Button type="primary" @click="createTask">{{$t("command.createNewTask")}}</Button>
      </Col>
      <Col :xs="24" :sm="18" :md="20" :lg="20">
        <div class="layout-nav">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              {{$t("command.myRPG")}}
            </template>
            <MenuItem name="1-1">
              <Icon type="ios-navigate"></Icon>
              {{$t("command.myTask")}}
            </MenuItem>
            <MenuItem name="1-2">
              <Icon type="ios-navigate"></Icon>
              {{$t("command.myProfile")}}
            </MenuItem>
          </Submenu>

          <Submenu name="10" v-if="isAdmin">
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              {{$t("command.rpgAdministrator")}}
            </template>
            <MenuItem name="10-3">
              <Icon type="ios-analytics"></Icon>
              {{$t("command.adminManager")}}
            </MenuItem>
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

          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              <span v-if="username">{{username}}</span>
              <span v-else>{{$t("command.signIn")}}</span>
            </template>
            <MenuItem name="4-1" v-if="token">
              <Icon type="ios-analytics"></Icon>
              {{$t("command.signOut")}}
            </MenuItem>
            <MenuItem name="4-2" v-else>
              <Icon type="ios-analytics"></Icon>
              {{$t("command.signIn")}}
            </MenuItem>
          </Submenu>

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
    computed: {
      token() {
        return this.$store.state.token
      },
      username() {
        return this.$store.state.username
      },
      userRole(){
        return this.$store.state.userRole
      },
      isAdmin(){
        if(this.$store.state.userRole==='ADMINISTRATOR'){
          return true;
        }
        return false;
      }
    },
    methods: {
      menuClick(name) {
        if (name === "6-1") {
          this.$i18n.locale = 'zh'
        }
        if (name === "6-2") {
          this.$i18n.locale = 'en'
        }
        if (name === "4-1") {
          this.$store.dispatch('logout');
        }
        if (name === "4-2") {
          this.$router.push({name: "login"})
        }
        if (name === "1-1") {
          this.$router.push({name: "taskPage"})
        }
        if (name === "10-3") {
          this.$router.push({name: "adminUserPage"})
        }
        if(name==="1-2"){
          this.$router.push({name:"myProfile"})
        }
      },
      createTask() {
        this.$router.push({name: 'createTask'})
      },
      clickRPG() {
        this.$router.push({name: 'jobPlaza'})
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
