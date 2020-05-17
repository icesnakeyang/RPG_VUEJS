<template>
  <Card>
    <p>{{$t('user.email.email')}}: {{email.email}} {{defaultTag}}</p>
    <p>{{$t('user.phone.verify')}}: {{verify}}</p>
    <p>{{$t('user.phone.createdTime')}}: {{createdTime}}</p>
    <divider></divider>
    <div v-if="!email.default">
      <Button type="error">设为默认</Button>
    </div>
  </Card>
</template>

<script>

  import {rpgFunc} from "../../../common/rpgfun";

  export default {
    name: "emailRow",
    props: {
      email: {}
    },
    computed: {
      verify() {
        if (this.email.verified) {
          return this.$t('user.phone.verifyTag')
        }
        return this.$t('user.phone.unverifyTag')
      },
      createdTime() {
        return rpgFunc.formatTime(this.email.createdTime)
      },
      defaultTag(){
        if (this.email.default) {
          return this.$t('user.phone.default')
        }
      }
    }
  }
</script>

<style scoped>

</style>
