<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem to="myAccountDashboard">{{$t('navigator.myAccount')}}</BreadcrumbItem>
      <BreadcrumbItem>{{$t('navigator.myWithdrawList')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Table :columns="col1" :data="withdrawLedgers"></Table>
      <div style="margin-top: 20px">
        <Page :total="total" @on-change="pageChange"></Page>
      </div>
    </Content>
  </div>
</template>

<script>
  import {apiListWithdraw} from "../../../api/api";
  import {rpgFormat} from "../../../common/rpgfun";

  export default {
    name: "withdrawLogList",
    data() {
      return {
        pageIndex: 1,
        pageSize: 20,
        withdrawLedgers: [],
        col1: [
          {
            title: this.$t('account.applyTime'),
            key: 'createTime',
            render: (h, params) => {
              return h('div', rpgFormat.formatTime(params.row.createTime))
            }
          },
          {
            title: this.$t('account.amount'),
            key: 'amount'
          },
          {
            title: this.$t('account.remark'),
            key: 'remark'
          },
          {
            title: this.$t('account.status'),
            key: 'status',
            render: (h, params) => {
              return h('div', this.$t("common.status." + params.row.status))
            }
          }
        ],
        total: 0
      }
    },
    methods: {
      loadAllData() {
        let params = {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
        }
        apiListWithdraw(params).then((response) => {
          console.log(response)
          if (response.data.errorCode === 0) {
            this.withdrawLedgers = response.data.data.withdrawLedgers
            this.total = response.data.data.totalWithdrawLedger
            console.log(this.total)
          } else {
            this.$Message.error(this.$t('syserr.' + response.data.errorCode))
          }
        }).catch((error) => {
          this.$Message.error(this.$t('common.error'))
        })
      },
      pageChange(page){
        console.log(page)
      }
    },
    mounted() {
      this.loadAllData()
    }
  }
</script>

<style scoped>
  @import "../../../assets/gogoStyles.css";
</style>
