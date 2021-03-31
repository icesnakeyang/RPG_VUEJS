<template>
  <div>
    <div v-if="loading">
      <Spin/>
    </div>
    <div v-else>
      <Card class="card">
        <p slot="title">取现申请详情</p>
        <p>取现金额：{{ withdrawLedger.amount }}</p>
        <p>取现申请时间：{{ createTime }}</p>
        <p>状态：{{ withdrawLedger.status }}</p>
        <p>备注：{{ withdrawLedger.remark }}</p>
      </Card>
      <Card class="card">
        <p slot="title">用户信息</p>
        <p>姓名：{{ userInfo.realName }}</p>
        <p>电话：{{ userInfo.phone }}</p>
        <p>余额：{{ userInfo.account }}</p>
        <p>收入：{{ userInfo.accountIn }}</p>
        <p>支出：{{ userInfo.accountOut }}</p>
        <p>信用：{{ userInfo.honor }}</p>
        <p>信用收入：{{ userInfo.honorIn }}</p>
        <p>信用支出：{{ userInfo.honorOut }}</p>
        <p>注册时间：{{ registerTime }}</p>
      </Card>
    </div>
    <div v-if="PENDING">
      <div v-if="saving">
        <Button type="primary" loading>{{ $t('common.btSaving') }}</Button>
      </div>
      <div v-else>
        <Button type="primary" @click="onAgree">{{ $t('admin.withdraw.btAgreeWithdraw') }}</Button>
      </div>
    </div>
  </div>
</template>

<script>
import {apiAgreeWithdraw, apiGetWithdrawApplys} from "../../../api/api";
import moment from 'moment'

export default {
  name: "userWithdrawApplyDetail",
  data() {
    return {
      withdrawLedgerId: null,
      withdrawLedger: null,
      userInfo: null,
      loading: true,
      saving: false
    }
  },
  computed: {
    createTime() {
      if (this.withdrawLedger && this.withdrawLedger.createTime) {
        return moment(this.withdrawLedger.createTime).format('YYYY-MM-DD HH:mm')
      }
      return ''
    },
    registerTime() {
      if (this.userInfo && this.userInfo.registerTime) {
        return moment(this.userInfo.registerTime).format('YYYY-MM-DD HH:mm')
      }
      return ''
    },
    PENDING() {
      if (this.withdrawLedger && this.withdrawLedger.status === 'PENDING') {
        return true
      }
      return false
    }
  },
  methods: {
    loadAllData() {
      let params = {
        withdrawLedgerId: this.withdrawLedgerId
      }
      this.loading = true
      apiGetWithdrawApplys(params).then((res) => {
        if (res.data.errorCode === 0) {
          this.withdrawLedger = res.data.data.withdrawLedger
          this.userInfo = res.data.data.userInfo
          console.log(this.withdrawLedger)
          console.log(this.userInfo)
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },

    onAgree() {
      let params = {
        withdrawLedgerId: this.withdrawLedgerId
      }
      this.saving = true
      apiAgreeWithdraw(params).then((res) => {
        if (res.data.errorCode === 0) {
          this.$Message.success(this.$t('admin.withdraw.agreeWithdrawSuccess'))
          this.loadAllData()
        } else {
          this.$Message.error(this.$t('syserr.' + res.data.errorCode))
        }
        this.saving = false
      }).catch(() => {
        this.$Message.error(this.$t('syserr.30000'))
        this.saving = false
      })
    }
  },
  mounted() {
    if (this.$route.params.withdrawLedgerId) {
      this.withdrawLedgerId = this.$route.params.withdrawLedgerId
    }
    this.loadAllData()
  }
}
</script>

<style scoped>
.card {
  margin: 20px;
}
</style>
