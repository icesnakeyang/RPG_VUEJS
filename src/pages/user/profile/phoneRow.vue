<template>
  <Card class="card">
    <p>{{$t('user.phone.phone')}}: {{phone.phone}}</p>
    <span v-if="isDefault">
      <Tag color="blue" size>{{ $t('user.phone.default') }}</Tag>
    </span>
    <span v-if="isVerify">
      <Tag color="blue">{{$t('user.phone.verifyTag')}}</Tag>
    </span>
    <p>{{$t('user.phone.createdTime')}}: {{createdTime}}</p>
    <div v-if="isDefault">
    </div>
    <div v-else="isDefault">
      <Button type="primary" size="small">{{ $t('user.phone.btSetDefault') }}</Button>
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
        console.log(this.phone)
        if (this.phone.isVerify) {
          return this.$t('user.phone.verifyTag')
        }
        return this.$t('user.phone.unverifyTag')
      },
      isVerify(){
        if(this.phone.isVerify){
          return true
        }
      },
      createdTime() {
        return rpgFunc.formatTime(this.phone.createdTime)
      },
      defaultTag() {
        if (this.phone.isDefault) {
          return this.$t('user.phone.default')
        }
      },
      isDefault(){
        if(this.phone.isDefault){
          return true
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
