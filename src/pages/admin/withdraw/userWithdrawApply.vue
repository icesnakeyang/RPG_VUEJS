<template>
  <div>
    <Breadcrumb :style="{margin:'24px 0'}">
      <BreadcrumbItem>{{ $t('navigator.userWithdraw') }}</BreadcrumbItem>
      <BreadcrumbItem>{{ $t('navigator.userWithdrawApply') }}</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{minHeight: '450px'}">
      <Table :columns="col1" :data="withdrawApplyList"></Table>
      <div style="margin-top: 20px">
        <Page :total="total"></Page>
      </div>
    </Content>
  </div>
</template>

<script>
import {apiListUserWithdrawApplys} from "../../../api/api";
import {rpgFunc} from "../../../common/rpgfun";

export default {
  name: "userWithdrawApply",
  data() {
    return {
      pageIndex: 1,
      pageSize: 20,
      withdrawApplyList: [],
      total: 0,
      col1: [
        {
          title: this.$t('user.realName'),
          key: 'real_name'
        },
        {
          title: this.$t('account.applyTime'),
          key: 'create_time',
          render: (h, params) => {
            return h('div', rpgFunc.formatTime(params.row.create_time))
          }
        },
        {
          title: this.$t('account.amount'),
          key: 'amount'
        },
        {
          title: this.$t('account.balance'),
          key: 'account'
        },
        {
          title: this.$t('user.phone.phone'),
          key: 'phone'
        },
        {
          title: this.$t('user.email.email'),
          key: 'email'
        },
        {
          title: this.$t('account.status'),
          key: 'status',
          render: (h, params) => {
            return h('div', this.$t("common.status." + params.row.status))
          }
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.$router.push({
                      name:'userWithdrawApplyDetail',
                      params:{
                        withdrawLedgerId:params.row.withdraw_ledger_id
                      }
                    })
                  }
                }
              }, this.$t('admin.withdraw.btProcess'))
            ]);
          }
        }
      ]
    }
  },
  methods: {
    loadAllData() {
      let params = {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }
      apiListUserWithdrawApplys(params).then((response) => {
        if (response.data.errorCode === 0) {
          this.withdrawApplyList = response.data.data.withdrawLedgers
          this.total = response.data.data.totalWithdrawApply
        }
      })
    }
  },
  mounted() {
    this.loadAllData()
  }
}
</script>

<style scoped>

</style>
