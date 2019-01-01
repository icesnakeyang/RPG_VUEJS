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
        <Button type="primary" @click="createTask">{{$t("navigator.createTask")}}</Button>
      </Col>
      <Col :xs="24" :sm="18" :md="20" :lg="20">
        <div class="layout-nav">
          <span v-if="token">
            <MenuJob></MenuJob>
            <MenuTask></MenuTask>
            <MenuMyProfile></MenuMyProfile>
            <MenuAccount></MenuAccount>
            <MenuHonor></MenuHonor>
            <MenuUser></MenuUser>
            <MenuAdmin v-if="isAdmin"></MenuAdmin>
            <MenuSecretary v-if="isSecretary"></MenuSecretary>
          </span>
          <MenuLogin></MenuLogin>
          <MenuLanguage></MenuLanguage>
          <MenuItem name="12-1">{{$t('navigator.spotlight')}}</MenuItem>
        </div>
      </Col>
    </Row>
  </Menu>
</template>

<script>
  import MenuAccount from './menuAccount'
  import MenuAdmin from './menuAdmin'
  import MenuHonor from './menuHonor'
  import MenuJob from './menuJob'
  import MenuLanguage from './menuLanguage'
  import MenuProfile from './menuProfile'
  import MenuSecretary from './menuSecretary'
  import MenuTask from './menuTask'
  import MenuUser from './menuUser'

  export default {
    name: "headerBarBase",
    components: {
      MenuJob,
      MenuLanguage,
      MenuAdmin,
      MenuSecretary,
      MenuAccount,
      MenuHonor,
      MenuProfile,
      MenuTask,
      MenuUser
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
        if (this.$store.state.roleType === 'ADMINISTRATOR') {
          return true;
        }
        if (this.$store.state.roleType === 'SUPER_ADMIN') {
          return true;
        }
        if (this.$store.state.roleType === 'ROOT_ADMIN') {
          return true;
        }
      },
      isSecretary() {
        if (this.$store.state.roleType === 'SECRETARY') {
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
        if (name === "5-1") {
          this.$store.dispatch('logout');
        }
        if (name === "5-2") {
          this.$router.push({name: "loginPage"})
        }
        if (name === "3-1") {
          this.$router.push({name: "taskPage"})
        }
        if (name === "10-3") {
          this.$router.push({name: "adminUserPage"})
        }
        if (name === "3-3") {
          this.$router.push({name: "myProfile"})
        }
        if (name === "10-1") {
          this.$router.push({
            name: "matchJobPage"
          })
        }
        if (name === "3-2") {
          this.$router.push({
            name: "myJobPage"
          })
        }
        if (name === "3-2-1") {
          this.$router.push({
            name: "myMatchJobPage"
          })
        }
        if (name === "3-2-2") {
          this.$router.push({
            name: 'partyAJobPage'
          })
        }
        if (name === "3-2-3") {
          this.$router.push({
            name: 'partyBJobPage'
          })
        }
        if (name === "3-2-4") {
          this.$router.push({
            name: 'myJobPage'
          })
        }
        if (name === "3-2-5") {
          this.$router.push({
            name: 'myPendingJobPage'
          })
        }
        if (name === "3-6") {
          this.$router.push({
            name: "myApplyJob"
          })
        }
        if (name === "7-1") {
          this.$router.push({
            name: "adminPage"
          })
        }
        if (name === "8-1") {
          this.$router.push({
            name: "secretaryMatchPage"
          })
        }
        if (name === "8-2") {
          this.$router.push({
            name: "secretaryTopUpPage"
          })
        }
        if(name==="3-4"){
          this.$router.push({
            name:'myAccountPage'
          })
        }
        if(name==="12-1"){
          this.$router.push({
            name:'spotlightList'
          })
        }
      },
      createTask() {
        this.$router.push({
          name: 'taskCreateNew'
        })
      },
      clickRPG() {
        this.$router.push({name: 'publicJobPage'})
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
