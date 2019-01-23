<template>
  <Menu mode="horizontal" active-name="1" @on-select="menuClick">
    <Row>
      <Col :xs="4" :sm="2" :md="2" :lg="2">
        <img class="layout-logo" src="../../../assets/gogoyang.png"/>
      </Col>
      <Col :xs="4" :sm="2" :md="1" :lg="1">
        <a herf="" class="gogo-title" @click="clickRPG">RPG</a>
      </Col>
      <Col :xs="8" :sm="3" :md="3" :lg="2">
        <Button type="primary" @click="createTask">{{$t("navigator.createTask")}}</Button>
      </Col>
      <Col :xs="24" :sm="18" :md="18" :lg="19">
        <div class="layout-nav">
          <span v-if="isNormal">
              <MenuJob></MenuJob>
              <MenuTask></MenuTask>
              <MenuProfile></MenuProfile>
              <MenuAccount></MenuAccount>
              <MenuHonor></MenuHonor>
          </span>
          <span v-if="isAdmin">
            <MenuAdmin></MenuAdmin>
          </span>
          <span v-if="isSecretary">
            <MenuSecretary></MenuSecretary>
          </span>
          <MenuUser></MenuUser>
          <MenuLanguage></MenuLanguage>
          <Button type="error" @click="onSpotlight">{{$t('navigator.spotlight')}}</Button>
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
          return true
        }
        return false
      },
      isSecretary() {
        if (this.$store.state.roleType === 'SECRETARY') {
          return true
        }
        return false
      },
      isNormal() {
        if (this.$store.state.roleType === 'NORMAL') {
          return true
        }
        return false
      }
    },
    methods: {
      menuClick(name) {
        if (name === "2-1") {
          this.$i18n.locale = 'zh'
        }
        if (name === "2-2") {
          this.$i18n.locale = 'en'
        }
        if (name === "1-1") {
          this.$store.dispatch('logout');
        }
        if (name === "1-2") {
          this.$router.push({name: "loginPage"})
        }
        if (name === "4-2") {
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
            name: "myApplyJob"
          })
        }
        if (name === "3-2-1") {
          this.$router.push({
            name: "myMatchJobPage"
          })
        }
        if (name === "3-3") {
          this.$router.push({
            name: 'partyAJobPage'
          })
        }
        if (name === "3-4") {
          console.log(34)
          this.$router.push({
            name: 'partyBJobPage'
          })
        }
        if (name === "3-2-4") {
          this.$router.push({
            name: 'myJobPage'
          })
        }
        if (name === "3-5") {
          this.$router.push({
            name: 'myPendingJobPage'
          })
        }
        if (name === "3-6") {
          this.$router.push({
            name: "myCompleteJobPage"
          })
        }
        if(name==="5-1"){
          this.$router.push({
            name:'profileDashboard'
          })
        }
        if (name === "7-1") {
          this.$router.push({
            name: "adminPage"
          })
        }
        if (name === "9-1") {
          this.$router.push({
            name: "secretaryAppliedJobList"
          })
        }
        if (name === "8-2") {
          this.$router.push({
            name: "secretaryTopUpPage"
          })
        }
        if (name === "6-2") {
          this.$router.push({
            name: 'myAccountPage'
          })
        }
        if (name === "12-1") {
          this.$router.push({
            name: 'spotlightList'
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
      },
      onSpotlight() {

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
    padding-right: 20px;
  }
</style>
