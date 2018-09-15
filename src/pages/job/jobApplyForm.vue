<template>
  <div>
    <Card class="card">
      <p slot="title">
        {{userInfo.username}}
      </p>
      <Form :model="userInfo" :label-width="140">
        <FormItem v-show="errInput">
          <Alert type="error" show-icon>{{errMsg}}</Alert>
        </FormItem>
        <FormItem :label="$t('user.realName')">
          <Input v-model="userInfo.realName"/>
        </FormItem>
        <FormItem :label="$t('user.phone')">
          <Input v-model="userInfo.phone"/>
        </FormItem>
        <FormItem :label="$t('user.email')">
          <Input v-model="userInfo.email" />
        </FormItem>
        <FormItem v-show="!saving">
          <Button type="primary" @click="clickConfirm">{{$t("user.confirm")}}</Button>
        </FormItem>
        <FormItem v-show="saving">
          <template>
            <!--<Spin size="small"></Spin>-->
            <!--<Spin></Spin>-->
            <Spin size="large"></Spin>
          </template>
        </FormItem>
      </Form>
    </Card>

  </div>
</template>

<script>
  import {loadUserInfo} from "../../api/api";
  import {saveContactInfo} from "../../api/api";

  export default {
    name: "jobApplyForm",
    data(){
      return{
        userInfo:{},
        errInput:false,
        errMsg:'',
        saving:false
      }
    },
    methods:{
      clickConfirm(){
        console.log(this.userInfo)
        saveContactInfo({
          realName:this.userInfo.realName,
          phone:this.userInfo.phone,
          email:this.userInfo.email
        }).then((response)=>{
          console.log(response)
          if(response.data.data.errorCode===0){

          }
        })
      }
    },
    mounted(){
        console.log('mounted')
      loadUserInfo().then((response)=>{
        console.log(response)
        this.userInfo=response.data.data
      })
    }
  }
</script>

<style scoped>
  .card{
    margin: 40px;
  }

</style>
