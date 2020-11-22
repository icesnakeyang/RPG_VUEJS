<template>
  <div>
    <p>{{ theData.realName }}</p>
    <span v-if="verifyAgree">
    <Tag color="success">{{ $t('admin.realname.statusAgree') }}</Tag>
  </span>
    <span v-if="verifyReject">
    <Tag color="error">{{ $t('admin.realname.statusReject') }}</Tag>
      <Divider></Divider>
    <Button type="primary" @click="onCertify">{{ $t('user.btVerifyRealname') }}</Button>
  </span>
    <span v-if="verifyPending">
    <Tag color="blue">{{ $t('admin.realname.statusPending') }}</Tag>
  </span>
  </div>
</template>

<script>
export default {
  name: "realnameRow",
  props: [
    'theData'
  ],
  computed: {
    verifyAgree() {
      if (this.theData.verify === 'AGREE') {
        return true
      }
      return false
    },
    verifyReject() {
      if (this.theData.verify === 'REJECT') {
        return true
      }
      return false
    },
    verifyPending() {
      if (this.theData.verify === 'PENDING') {
        return true
      }
      return false
    }
  },
  methods: {
    onCertify() {
      this.$router.push({
        name: 'submitUserProfile'
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
