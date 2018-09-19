<template>
  <div class="content">
    <Form>
      <FormItem>
        <Button type="primary" @click="addAdmin">{{$t("admin.addAdmin")}}</Button>
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
      :mask-closable="false"
      @on-ok="handleSelectAll(true)">
      <Table ref="selection" :columns="columns1" :data="users" height="200"
             highlight-row @on-current-change="selectedRow"
      ></Table>
    </Modal>
  </div>
</template>

<script>
  import adminUserPageRow from "./adminUserPageRow"
  import {loadAdmins} from "../../api/api";
  import {loadUsers} from "../../api/api";
  import UnadminUserTable from "./UnadminUserTable";
  import {rpgFormat} from "../../common/rpgfun";
  import {setAdmin} from "../../api/api";

  export default {
    name: "adminUserPage",
    data() {
      return {
        users: [],
        admins:[],
        selectedUser:{},
        modal1:false,
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
          let userList=[];
          if(response.data.data.content){
            for(let row of response.data.data.content){
              row.registerTime=rpgFormat.formatTime(row.registerTime);
              userList.push(row)
            }
          }
          this.users=userList
        })
      },
      loadAdminUsers() {
        loadAdmins({
          pageIndex: 0,
          pageSize: 100
        }).then((response) => {
          if (response.data.data) {
            this.admins = response.data.data.content;
          }
        })
      },

      handleSelectAll(status){
        console.log(this.selectedUser)
        setAdmin({
          userId:this.selectedUser.userId,
          role:'ADMINISTRATOR'
        }).then((response)=>{
          console.log(response)
        })
      },

      selectedRow(currentRow, oldCurrentRow){
        this.selectedUser=currentRow
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
