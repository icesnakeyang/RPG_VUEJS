<template>
  <div class="content">
    <Form>
      <FormItem>
        <Button type="primary" @click="addSecretary">{{$t("admin.addSecretary")}}</Button>
      </FormItem>
      <secretaryUserPageRow v-for="user in secretaries"
                            v-bind:key="user.userId"
                            v-bind:user="user"
      >
      </secretaryUserPageRow>
    </Form>
    <Modal
      title="Title"
      v-model="modal1"
      width="70%"
      :mask-closable="false"
      @on-ok="handleSetSecretary">
      <Table :columns="columns1" :data="users" height="200"
             highlight-row @on-current-change="selectedRow"></Table>
    </Modal>
  </div>
</template>

<script>
  import {loadUsersAppliedJobAndWaiting} from "../../../api/api";
  import {loadJobToMatch} from "../../../api/api";

  export default {
    name: "matchJobPage",
    data() {
      return {
        jobs: [],
        users: [],
        selectedUser: {},
        modal1: false,
        columns1: [
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
      matchToUser() {
        this.modal1 = true
        loadUsersAppliedJobAndWaiting({}).then((response) => {
          console.log(response);
        })
      },

      loadJobToMatchMethod(){
        loadJobToMatch({
          pageIndex:0,
          pageSize:100
        }).then((response)=>{
          console.log(response)
          this.jobs=response.data.data
        })
      }
    },
    mounted(){
      this.loadJobToMatchMethod();
    }
  }
</script>

<style scoped>

</style>
