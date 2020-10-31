<template>
  <div>team profile</div>
</template>

<script>
export default {
  name: "teamProfile",
  data() {
    return {
      team: {}
    }
  },
  methods: {
    loadAllData() {
      const params={
        teamId:this.$store.state.teamId
      }

    }
  },
  mounted() {
    console.log(this.$route.params.teamId)
    if (this.$route.params.teamId) {
      this.$store.dispatch('saveTeamId', this.$route.params.teamId)
    }
    this.loadAllData()
  }
}
</script>

<style scoped>

</style>
