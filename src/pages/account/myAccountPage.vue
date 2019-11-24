<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem to="myAccountDashboard">{{$t('navigator.myAccount')}}</BreadcrumbItem>
      <BreadcrumbItem>{{$t('navigator.myAccountLedger')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Table border :columns="columns5" :data="data5">
      </Table>
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
        columns2: [
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age',
            render: (h, params) => {

              if (params.row.$isEdit) {

                return h('input', {

                  domProps: {
                    value: params.row.age
                  },
                  on: {
                    input: function (event) {
                      params.row.age = event.target.value
                    }
                  }
                });
              } else {

                return h('div', params.row.age);
              }
            }
          },
          {
            title: 'Address',
            key: 'address'
          },
          {
            title: 'Action',
            key: 'action',
            render: (h, params) => {
              return h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                },
                on: {
                  click: () => {
                    if (params.row.$isEdit) {
                      this.handleSave(params.row)
                    } else {
                      this.handleEdit(params.row)
                    }
                  }
                }
              }, params.row.$isEdit ? '保存' : '编辑')
            }
          }
        ],
        data3: [
          {
            name: '哈哈',
            age: 18,
            address: '上海',
            $isEdit: false
          },
          {
            name: '啦啦',
            age: 24,
            address: '北京',
            $isEdit: false
          }
        ],
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
      },
      handleEdit(row) {
        this.$set(row, '$isEdit', true)

      },
      handleSave(row) {
        this.$set(row, '$isEdit', false)
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
