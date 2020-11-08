<template>
  <Menu active-name="1-2" theme="dark" width="auto" @on-select="menuClick">
    <span v-if="isNormal">
      <MenuJob></MenuJob>
      <MenuTask></MenuTask>
      <MenuTeam></MenuTeam>
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
  </Menu>
</template>

<script>
import MenuJob from './menuJob'
import MenuTask from './menuTask'
import MenuProfile from './menuProfile'
import MenuAccount from './menuAccount'
import MenuHonor from './menuHonor'
import MenuAdmin from './menuAdmin'
import MenuSecretary from './menuSecretary'
import MenuTeam from '../menuTeam'

export default {
  name: "baseSider",
  components: {
    MenuJob,
    MenuTask,
    MenuProfile,
    MenuAccount,
    MenuHonor,
    MenuAdmin,
    MenuSecretary,
    MenuTeam
  },
  computed: {
    isNormal() {
      if (this.$store.state.roleType === 'NORMAL') {
        return true
      }
      return false
    },
    isAdmin() {
      if (this.$store.state.roleType === 'ADMINISTRATOR') {
        return true
      }
      if (this.$store.state.roleType === 'ROOT_ADMIN') {
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
  },
  methods: {
    menuClick(name) {
      if (name === "menuMyApplyJob") {
        this.$router.push({
          name: "myApplyJob"
        })
      }
      if (name === "menuPartyAJobPage") {
        this.$router.push({
          name: 'partyAJobPage'
        })
      }
      if (name === "menuPartyBJobPage") {
        this.$router.push({
          name: 'partyBJobPage'
        })
      }
      if (name === "menuMyPendingJobPage") {
        this.$router.push({
          name: 'myPendingJobPage'
        })
      }
      if (name === "menuMyAcceptJobPage") {
        this.$router.push({
          name: "myAcceptJobPage"
        })
      }
      if (name === "menuTaskPage") {
        this.$router.push({name: "taskPage"})
      }
      if (name === "menuProfileDashboard") {
        this.$router.push({
          name: 'profileDashboard'
        })
      }
      if (name === "menuMyAccountDashboard") {
        this.$router.push({
          name: 'myAccountDashboard'
        })
      }
      if (name === "menuMyAccountPage") {
        this.$router.push({
          name: 'myAccountPage'
        })
      }
      if (name === "menuMyHonorDashboard") {
        this.$router.push({
          name: "myHonorDashboard"
        })
      }
      if (name === "menuMyHonorList") {
        this.$router.push({
          name: 'myHonorList'
        })
      }
      if (name === "menuSecretaryAppliedJobList") {
        this.$router.push({
          name: "secretaryAppliedJobList"
        })
      }
      if (name === 'menuUserActionLogList') {
        this.$router.push({
          name: 'userActionLogList'
        })
      }
      if (name === 'menuMyWithdraw') {
        this.$router.push({
          name: 'withdrawLogList'
        })
      }
      if (name === 'menuUserWithdrawApply') {
        this.$router.push({
          name: 'userWithdrawApply'
        })
      }
      if (name === 'menuMyTeamList') {
        this.$router.push({
          name: 'teamList'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
