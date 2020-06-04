<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.userActionLogList')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Table border :columns="cols" :data="userActionLogList"></Table>
      <Page style="margin-top: 20px" :total="totalData" show-total @on-change="onPageChange"/>
    </Content>
  </div>
</template>

<script>
  import {apiListUserActionLog} from "../../../api/api";
  import moment from "moment";

  export default {
    name: "userActionLogList",
    data() {
      return {
        pageIndex: 1,
        pageSize: 10,
        userActionLogList: [],
        cols: [
          {
            title: this.$t('admin.userActionLog.userId'),
            key: 'userId',
          },
          {
            title: this.$t('admin.userActionLog.userName'),
            key: 'realName'
          },
          {
            title: this.$t('admin.userActionLog.actType'),
            key: 'actType'
          },
          {
            title: this.$t('admin.userActionLog.createTime'),
            key: 'createTime',
            "sortable": true,
            render: (h, params) => {
              return h('div', [
                h('span', moment(params.row.createTime).format('YYYY-MM-DD HH:mm'))
              ]);
            }
          },
          {
            title: this.$t('admin.userActionLog.result'),
            key: 'result'
          },
          {
            title: this.$t('admin.userActionLog.jobTitle'),
            key: 'jobTitle'
          },
          {
            title: this.$t('admin.userActionLog.ip'),
            key: 'ip'
          },
          {
            title: this.$t('admin.userActionLog.city'),
            key: 'cityName'
          },
          {
            title: this.$t('admin.userActionLog.memo'),
            key: 'memo'
          }
        ],
        totalData: 0,
        totalPage: 1
      }
    },
    methods: {
      loadAllData() {
        let params = {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
        }
        apiListUserActionLog(params).then((response) => {
          console.log(response)
          if (response.data.errorCode === 0) {
            this.userActionLogList = response.data.data.userActionLogs
            this.totalData = response.data.data.totalUserActionLog
          } else {
            this.$Message.error(this.$t('syserr.20002'))
          }
        }).catch((error) => {
        })
      },

      onPageChange(pageIndex) {
        this.pageIndex = pageIndex
        this.loadAllData()
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
