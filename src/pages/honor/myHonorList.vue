<template>
  <div>
    <Table border :columns="columns5" :data="honorList"></Table>
  </div>
</template>

<script>
  import {apiListMyHonor} from "../../api/api";
  import MyHonorRow from "./myHonorRow"
  import {rpgFormat} from "../../common/rpgfun";

  export default {
    name: "myHonorList",
    components: {
      MyHonorRow
    },
    data() {
      return {
        honorList: [],
        columns5: [
          {
            title: this.$t("user.honor.createdTime"),
            key: 'cratedTime',
            render: (h, params) => {
              return h('div', rpgFormat.formatTime(params.row.createdTime))
            }
          },
          {
            title: this.$t("user.honor.honorPoint"),
            key: 'point',
            sortable: true
          },
          {
            title: this.$t("user.honor.honorType"),
            key: 'type',
            render:(h, params)=>{
              return h('div', this.$t("user.honor."+params.row.type))
            }
          }
        ],
      }
    },
    methods: {
      loadAllData() {
        apiListMyHonor({
          pageIndex: 0,
          pageSize: 100
        }).then((response) => {
          console.log(response)
          if (response.data.errorCode === 0) {
            this.honorList = response.data.data.list
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
