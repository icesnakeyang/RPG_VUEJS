<template>
  <Card class="card">
    <p>{{$t('user.phone.phone')}}: {{phone.phone}}
      <span v-show="defaultTag">
        <Tag color="blue">{{defaultTag}}</Tag>
      </span>
    </p>
    <p>{{$t('user.phone.verify')}}: {{verify}}</p>
    <p>{{$t('user.phone.createdTime')}}: {{createdTime}}</p>
    <divider></divider>
    <div v-if="!phone.default">
      <Button type="error">{{$t('user.phone.btSetDefault')}}</Button>
    </div>
  </Card>
</template>

<script>
  import {rpgFormat} from "../../../common/rpgfun";

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
        return rpgFormat.formatTime(this.phone.createdTime)
      },
      defaultTag() {
        if (this.phone.default) {
          return this.$t('user.phone.default')
        }else{
          return null
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
