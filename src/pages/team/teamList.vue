<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>{{ $t('navigator.myTeam') }}</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{minHeight: '400px'}">
      <Card class="card">
        <Button type="primary" @click="onCreateTeam">创建团队</Button>
      </Card>
      <div class="card" v-for="item in teamList" :key="item.ids">
        <TeamListRow :data="item" />
      </div>
    </Content>
  </div>
</template>

<script>
import {apiListMyTeam} from "../../api/api";
import TeamListRow from './teamListRow'

export default {
  name: "teamList",
  components: {
    TeamListRow
  },
  data() {
    return {
      teamList: []
    }
  },
  methods: {
    loadAllData() {
      apiListMyTeam({}).then((response) => {
        console.log(response)
        if (response.data.errorCode === 0) {
          this.teamList = response.data.data.teamList
        } else {
          this.$Message.error(this.$t("syserr." + response.data.errorCode))
        }
      }).catch(() => {
        this.$Message.error(this.$t("syserr.30000"))
      })
    },
    onCreateTeam() {
      this.$router.push({
        name: 'createTeam'
      })
    },

    onTeamProfile() {

    }
  },
  mounted() {
    this.loadAllData()
  }
}
</script>

<style scoped>
.card {
  margin: 20px;
}
</style>
