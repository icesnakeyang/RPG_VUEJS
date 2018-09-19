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
  import secretaryUserPageRow from "./secretaryUserPageRow"
  import {loadSecretary} from "../../api/api";
  import {loadUnSecretary} from "../../api/api";
  import {setSecretary} from "../../api/api";
  import {rpgFormat} from "../../common/rpgfun";

  export default{
    name: "secretaryUserPage",
    components: {
      secretaryUserPageRow
    },
    data() {
      return {
        secretaries: [],
        users:[],
        selectedUser:{},
        modal1:false,
        columns1:[
          {
            title:this.$t("user.userId"),
            key:'userId'
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
      addSecretary() {
        this.modal1 = true;
        loadUnSecretary({
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
          this.users=userList;
        })
      },
      loadSecretaryUsers(){
        loadSecretary({
          pageIndex: 0,
          pageSize: 100
        }).then((response) => {
          if (response.data.data) {
            this.secretaries = response.data.data.content;
            console.log(this.secretaries);
          }
        })
      },
      handleSetSecretary(){
        setSecretary({
          userId:this.selectedUser.userId,
          role:'SECRETARY'
        }).then((response)=>{
          console.log(response)
        })
      },
      selectedRow(currentRow){
        this.selectedUser=currentRow;
        console.log(this.selectedUser)
      }
    },
    mounted() {
      this.loadSecretaryUsers();
    }
  }
</script>

<style scoped>

</style>
