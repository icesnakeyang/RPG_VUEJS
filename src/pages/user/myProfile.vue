<template>
  <div>
    <Form :model="form" :label-width="200">
      <FormItem v-show="errInput">
        <Alert type="error" show-icon>{{errMsg}}</Alert>
      </FormItem>
      <FormItem :label="$t('user.username')">
        <Input v-model="profile.username" />
      </FormItem>
      <FormItem :label="$t('user.realName')">
        <Input v-model="profile.realName" />
      </FormItem>
      <FormItem :label="$t('user.phone')">
        <Input v-model="profile.phone" />
      </FormItem>
      <FormItem :label="$t('user.email')">
        <Input v-model="profile.email" />
      </FormItem>
      <FormItem>
        <Button type="primary" @click="submitProfile">{{$t("user.update")}}</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import {loadUserInfo} from "../../api/api";
  import {apiSaveContactInfo} from "../../api/api";

  export default {
    name: "myProfile",
    data() {
      return {
        form:{},
        errInput:false,
        errMsg:'',
        profile:{}
      }
    },
    methods:{
      loadUserProfile(){
        loadUserInfo({
          pageIndex:0,
          pageSize:100
        }).then((response)=>{
          this.profile=response.data.data;
        })
      },
      submitProfile(){
        apiSaveContactInfo({
          realName:this.profile.realName,
          email:this.profile.email,
          phone:this.profile.phone
        }).then((response)=>{
          if(response.data.errorCode===0){
            this.$Message
          }
        })
      }
    },
    mounted(){
      this.loadUserProfile()
    }
  }
</script>

<style scoped>

</style>
