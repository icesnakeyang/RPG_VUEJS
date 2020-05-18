<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem to="myAccountDashboard">{{$t('navigator.myAccount')}}</BreadcrumbItem>
      <BreadcrumbItem>{{$t('navigator.myAccountLedger')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Card>
        <Table border :columns="columns5" :data="data5"></Table>
        <Page style="margin-top: 20px" :total="totalAccounts" @on-change="onPageChange"/>
      </Card>
    </Content>
  </div>
</template>

<script>
    import {apiListMyAccount} from "../../api/api"
    import moment from "moment";

    export default {
        name: "myAccountPage",
        data() {
            return {
                pageIndex: 1,
                pageSize: 20,
                columns5: [
                    {
                        title: this.$t("user.account.createdTime"),
                        key: 'cratedTime',
                        render: (h, params) => {
                            return h('div', moment(params.row.createdTime).format('YYYY-MM-DD HH:mm'))
                        }
                    },
                    {
                        title: this.$t("user.account.amount"),
                        key: 'amount',
                        sortable: true
                    },
                    {
                        title: this.$t("user.account.type"),
                        key: 'type',
                        render: (h, params) => {
                            return h('div', this.$t("user.account." + params.row.type))
                        }
                    }
                ],
                data5: [],
                keyword: '',
                totalAccounts: 0
            }
        },
        computed: {
            items() {
                return "ok"
            }
        },
        methods: {
            loadAllData() {
                const params = {
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize
                }
                apiListMyAccount(params).then((response) => {
                    console.log(response)
                    if (response.data.errorCode === 0) {
                        this.data5 = response.data.data.accounts
                        this.totalAccounts = response.data.data.totalAccounts
                    } else {
                        this.$Message.error(this.$t('syserr.' + response.data.errorCode))
                    }
                })
            },
            handleEdit(row) {
                this.$set(row, '$isEdit', true)

            },
            handleSave(row) {
                this.$set(row, '$isEdit', false)
            },

            onPageChange(pageIndex){
                console.log(pageIndex)
            }
        },
        mounted() {
            this.loadAllData()
        }
    }
</script>

<style scoped>
  @import "../../assets/gogoStyles.css";
</style>
