<template>
  <div>
    <Card style="margin-top: 10px">
      <p slot="title">
        <a @click="onRow">{{ theData.realName }}</a>

      </p>
    </Card>
  </div>
</template>

<script>
export default {
  name: "realnameRow",
  props: [
    'theData'
  ],
  methods: {
    onRow() {
      this.$router.push({
        name: 'realnamePendingDetail',
        params:{
          pendingUserId:this.theData.userId
        }
      })
    }
  },
  mounted() {
    console.log(this.theData)
  }
}
</script>

<style scoped>

</style>
