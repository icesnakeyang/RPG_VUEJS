<template>
  <div class="content">
    <Form>
      <FormItem>
        <Button type="primary" @click="addAdmin">添加Admin</Button>
      </FormItem>
      <admin-user-page-row v-for="user in users"
                           v-bind:key="user.userId"
                           v-bind:user="user">
      </admin-user-page-row>
    </Form>

    <Modal
      title="Title"
      v-model="modal1"
      :mask-closable="false">
      <Table :columns="columns1" :data="data1"></Table>
    </Modal>
  </div>
</template>

<script>
  import adminUserPageRow from "./adminUserPageRow"
  import {loadAdmins} from "../../api/api";
  import {loadUsers} from "../../api/api";

  export default {
    name: "adminUserPage",
    data() {
      return {
        users: [],
        admins:[],
        modal1:false,
        columns1: [
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    },
    components: {
      adminUserPageRow
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
          }
        })
      },
      loadUnAdminUsers() {
        loadAdmins({
          pageIndex: 0,
          pageSize: 100
        }).then((response) => {
          if (response.data.data) {
            this.admins = response.data.data.content;
          }
        })
      }
    },

    mounted() {
      this.loadUnAdminUsers();
    }
  }
</script>

<style scoped>
  .content {
    padding: 40px;
  }
</style>
