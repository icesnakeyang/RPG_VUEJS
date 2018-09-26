<template>
  <Menu mode="horizontal" active-name="1" @on-select="menuClick">
    <Row>
      <Col :xs="4" :sm="2" :md="2" :lg="2">
        <img class="layout-logo" src="../../../assets/gogoyang.png"/>
      </Col>
      <Col :xs="4" :sm="2" :md="1" :lg="1">
        <a herf="" class="gogo-title" @click="clickRPG">RPG</a>
      </Col>
      <Col :xs="8" :sm="2" :md="1" :lg="1">
        <Button type="primary" @click="createTask">{{$t("command.createNewTask")}}</Button>
      </Col>
      <Col :xs="24" :sm="18" :md="20" :lg="20">
        <div class="layout-nav">
          <MenuJob2 v-if="isJobMenu"></MenuJob2>
          <MenuJob v-else="isJobMenu"></MenuJob>
          <MenuLanguage></MenuLanguage>
        </div>
      </Col>
    </Row>
  </Menu>
</template>

<script>
  import MenuJob from './menuJob'
  import MenuJob2 from './menuJob2'
  import MenuLanguage from './menuLanguage'

  export default {
    name: "HeaderBarBase",
    components: {
      MenuJob,
      MenuJob2,
      MenuLanguage
    },
    computed: {
      token() {
        return this.$store.state.token
      },
      username() {
        return this.$store.state.username
      },
      userRole() {
        return this.$store.state.userRole
      },
      isAdmin() {
        if (this.$store.state.userRole === 'ADMINISTRATOR') {
          return true;
        }
        return false;
      },
      isJobMenu() {
        if (this.$route.meta.menuType === 'job') {
          return true
        }
        return false
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
        if (name === "10-4") {
          this.$router.push({name: 'secretaryUserPage'})
        }
        if (name === "1-2") {
          this.$router.push({name: "myProfile"})
        }
        if (name === "10-1") {
          this.$router.push({
            name: "matchJobPage"
          })
        }
        if (name === "1-3") {
          this.$router.push({
            name: "myJobPage"
          })
        }
        if (name === "1-3-1") {
          this.$router.push({
            name:"newJobPage"
          })
        }
        if (name === "1-3-2") {
          console.log('party a')
        }
        if (name === "1-3-3") {
          console.log('party b')
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
