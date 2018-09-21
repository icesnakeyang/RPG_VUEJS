<template>
  <div>
    <div>{{$t("admin.totalApplyUser")}}:{{currentUsers}}</div>
    <Table :columns="columns1" :data="users" height="200"
           highlight-row @on-current-change="selectedRow"></Table>
  </div>
</template>

<script>
  import {loadUsersAppliedJobAndWaiting} from "../../../api/api";

  export default {
    name: "applyUserList",
    props: {
      jobId: ''
    },
    data() {
      return {
        users: [],
        columns1: [
          {
            title: this.$t("admin.match"),
            key: 'action',
            fixed: 'left',
            width: 80,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      console.log(params.row.userId+"/"+this.jobId)
                    }
                  }
                }, this.$t("admin.match"))
              ]);
            }
          },
          {
            title: this.$t("user.userId"),
            key: 'userId'
          },
          {
            title: this.$t("user.username"),
            key: 'username'
          },
          {
            title: this.$t("user.realName"),
            key: 'realName'
          },
          {
            title: this.$t("user.phone"),
            key: 'phone'
          },
          {
            title: this.$t("user.email"),
            key: 'email'
          },
          {
            title: this.$t("user.registerTime"),
            key: 'registerTime'
          }
        ]
      }
    },
    methods: {

      selectedRow() {

      }
    },
    computed: {
      currentUsers() {
        return this.users.length;
      }
    },
    mounted() {
      console.log(this.jobId)
      loadUsersAppliedJobAndWaiting({
        pageIndex: 0,
        pageSize: 100,
        jobId: this.jobId
      }).then((response) => {
        console.log(response)
        this.users = response.data.data;
      })

    }
  }
</script>

<style scoped>

</style>
