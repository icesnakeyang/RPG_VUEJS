<template>
  <div class="content">
    <Form>
      <FormItem>
        <Button type="primary" @click="addAdmin">{{$t("admin.addAdmin")}}</Button>
      </FormItem>
      <AdminPageRoleBar v-for="admin in admins"
                           v-bind:admin="admin">
      </AdminPageRoleBar>
    </Form>

    <Modal title="Add new Admin"
           v-model="addNewAdminModal"
           width="60%"
           :mask-closable="false">

      <Form :model="formItem" :label-width="200">
        <FormItem v-show="errInput">
          <Alert type="error" show-icon>{{errMsg}}</Alert>
        </FormItem>
        <FormItem :label="$t('register.username')">
          <Input v-model="formItem.loginName" :placeholder="$t('register.usernamePlaceholder')"/>
        </FormItem>
        <FormItem :label="$t('register.password')">
          <Input type="password" v-model="formItem.password" :placeholder="$t('register.passwordPlaceholder')"/>
        </FormItem>
        <FormItem :label="$t('register.password2')">
          <Input type="password" v-model="formItem.password2" :placeholder="$t('register.password2Placeholder')"/>
        </FormItem>
        <FormItem :label="$t('admin.roleType')">
          <Select v-model="formItem.roleType" style="width:200px">
            <Option v-for="item in roleTypes" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="createAdminUser">{{$t("register.register")}}</Button>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
  import {loadAdmins} from "../../api/api";
  import {rpgFormat} from "../../common/rpgfun";
  import {loadRoleType} from "../../api/api";
  import {createAdmin} from "../../api/api";
  import AdminPageRoleBar from "./adminPageRoleBar"

  export default {
    name: "adminUserPage",
    components: {
      AdminPageRoleBar
    },
    data() {
      return {
        formItem:{},
        errInput:false,
        errMsg:"",
        addNewAdminModal:false,

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
        roleTypes: [],
      }
    },

    methods: {
      addAdmin() {
        console.log('add admin')
        this.addNewAdminModal=true;

      },
      loadAdminUsers() {
        loadAdmins({}).then((response) => {
          console.log(response);
          if (response.data.data) {
            this.admins = response.data.data;
          }
        })
      },

      createAdminUser(){
        console.log(this.formItem)
        createAdmin({
          loginName:this.formItem.loginName,
          password:this.formItem.password,
          roleType:this.formItem.roleType
        }).then((response)=>{
          if(response.data.errorCode!==0){
            this.errInput=true;
            this.errMsg=this.$t("syserr."+response.data.errorCode);
            return
          }else{
            this.addNewAdminModal=false
            this.loadAdminUsers()
          }
        })
      }
    },

    mounted() {
      this.loadAdminUsers();
      loadRoleType({}).then((response)=>{
        this.roleTypes=response.data.data
        console.log(this.roleTypes)
        if(response.data.errorCode!==0){
          this.errInput=true;
          this.errMsg=this.$t("syserr."+response.data.errorCode);
          return
        }
      })
    }
  }
</script>

<style scoped>
  .content {
    padding: 40px;
  }
</style>
