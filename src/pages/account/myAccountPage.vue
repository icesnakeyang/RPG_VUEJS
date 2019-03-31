<template>
  <div>
    <Table border :columns="columns5" :data="data5">

    </Table>

  </div>
</template>

<script>
  import {apiListMyAccount} from "../../api/api"
  import {rpgFormat} from "../../common/rpgfun";

  export default {
    name: "myAccountPage",
    data() {
      return {
        columns5: [
          {
            title: this.$t("user.account.createdTime"),
            key: 'cratedTime',
            render: (h, params) => {
              return h('div', rpgFormat.formatTime(params.row.createdTime))
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
            render:(h, params)=>{
              return h('div', this.$t("user.account."+params.row.type))
            }
          }
        ],
        data5:[],
        keyword: ''
      }
    },
    computed: {
      items() {
        return "ok"
      }
    },
    methods: {
      loadAllData() {
        apiListMyAccount({
          pageIndex: 0,
          pageSize: 20
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.data5 = response.data.data.content
          } else {
            this.$Message.error(this.$t('syserr.' + response.data.errorCode))
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
