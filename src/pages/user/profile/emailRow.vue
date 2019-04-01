<template>
  <Card>
    <p>{{$t('user.email.email')}}: {{email.email}}
      <Tag color="blue">{{defaultTag}}</Tag>
    </p>
    <p>{{$t('user.phone.verify')}}: {{verify}}</p>
    <p>{{$t('user.phone.createdTime')}}: {{createdTime}}</p>
    <divider></divider>
    <div v-if="!email.default">
      <Button type="error">{{$t('user.phone.btSetDefault')}}</Button>
    </div>
  </Card>
</template>

<script>
  import {rpgFormat} from "../../../common/rpgfun";

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
        return rpgFormat.formatTime(this.email.createdTime)
      },
      defaultTag(){
        if (this.email.default) {
          return this.$t('user.email.default')
        }
      }
    }
  }
</script>

<style scoped>

</style>
