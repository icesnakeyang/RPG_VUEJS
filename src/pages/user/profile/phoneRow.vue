<template>
  <Card class="card">
    <p>{{$t('user.phone.phone')}}: {{phone.phone}} {{defaultTag}}</p>
    <p>{{$t('user.phone.verify')}}: {{verify}}</p>
    <p>{{$t('user.phone.createdTime')}}: {{createdTime}}</p>
    <divider></divider>
    <div v-if="!phone.default">
      <Button type="error">设为默认</Button>
    </div>
  </Card>
</template>

<script>

  import {rpgFunc} from "../../../common/rpgfun";

  export default {
    name: "phoneRow",
    props: {
      phone: {}
    },
    computed: {
      verify() {
        if (this.phone.verify) {
          return this.$t('user.phone.verifyTag')
        }
        return this.$t('user.phone.unverifyTag')
      },
      createdTime() {
        return rpgFunc.formatTime(this.phone.createdTime)
      },
      defaultTag() {
        if (this.phone.default) {
          return this.$t('user.phone.default')
        }
      }
    }
  }
</script>

<style scoped>
  .card {
    margin: 10px;
  }
</style>
