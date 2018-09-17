<template>
  <div class="content">
    <Form>
      <FormItem>
        <Button type="primary" @click="addAdmin">添加Admin</Button>
      </FormItem>
      <admin-user-page-row v-for="user in admins"
                           v-bind:key="user.userId"
                           v-bind:user="user">
      </admin-user-page-row>
    </Form>

    <Modal
      title="Title"
      v-model="modal1"
      width="70%"
      :mask-closable="false">
      <Table :columns="columns1" :data="users" height="200"></Table>
    </Modal>
  </div>
</template>

<script>
  import adminUserPageRow from "./adminUserPageRow"
  import {loadAdmins} from "../../api/api";
  import {loadUsers} from "../../api/api";
  import UnadminUserTable from "./UnadminUserTable";

  export default {
    name: "adminUserPage",
    data() {
      return {
        users: [],
        admins:[],
        modal1:false,
        columns1: [
          {
            title: 'User ID',
            key: 'userId'
          },
          {
            title: 'Username',
            key: 'username'
          },
          {
            title: 'Real Name',
            key: 'realName'
          },
          {
            title: 'Phone',
            key: 'phone'
          },
          {
            title: 'Email',
            key: 'email'
          },
          {
            title: 'Register Time',
            key: 'regTime'
          }
        ],
      }
    },
    components: {
      adminUserPageRow,
      UnadminUserTable
    },
    methods: {
      addAdmin() {
        this.modal1=true;
        loadUsers({
          pageIndex:0,
          pageSize:100
        }).then((response)=>{
          if(response.data.data.content){
            this.users=response.data.data.content;
            console.log(this.users)
          }
        })
      },
      loadAdminUsers() {
        loadAdmins({
          pageIndex: 0,
          pageSize: 100
        }).then((response) => {
          if (response.data.data) {
            this.admins = response.data.data.content;
            console.log(this.admins)
          }
        })
      }
    },

    mounted() {
      this.loadAdminUsers();
    }
  }
</script>

<style scoped>
  .content {
    padding: 40px;
  }
</style>
