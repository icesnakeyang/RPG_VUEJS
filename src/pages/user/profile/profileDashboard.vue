<template>
  <div>
    <Card class="card">
      <p slot="title" >
        {{$t('user.email.title')}}
      </p>
      <EmailRow v-for="(item, index) in emailList"
                :key="index"
                :email="item"></EmailRow>
    </Card>
    <Card class="card">
      <p slot="title">
        {{$t('user.phone.phone')}}
      </p>
      <PhoneRow v-for="(item, index) in phoneList"
                :key="index"
                :phone="item"></PhoneRow>
    </Card>
    <Card class="card">
      <p slot="title">
        {{$t('user.realname.title')}}
      </p>
      <p>{{$t('user.realname.realName')}}: {{user.realName}}</p>
      <divider></divider>
      <Button type="primary" @click="onCertify">{{$t('user.btVerifyRealname')}}</Button>
    </Card>
  </div>
</template>

<script>
  import {apiGetUserInfo} from "../../../api/api";
  import {apiListEmailOfUser} from "../../../api/api";
  import {apiListPhoneOfUser} from "../../../api/api";
  import PhoneRow from './phoneRow'
  import EmailRow from './emailRow'

  export default {
    name: "profileDashboard",
    components:{
      PhoneRow,
      EmailRow
    },
    data(){
      return{
        user:{},
        phoneList:[],
        emailList:[]
      }
    },

    methods:{
      loadAllData(){
        apiGetUserInfo({

        }).then((response)=>{
          if(response.data.errorCode===0){
            this.user=response.data.data.user
          }else{
            this.$Message.error(this.$t('syserr.'+response.data.errorCode))
          }
        })

        apiListPhoneOfUser({

        }).then((response)=>{
          if(response.data.errorCode===0) {
            this.phoneList = response.data.data.phones
          }else{
            this.$Message.error(this.$t('syserr.'+response.data.errorCode))
          }
        })

        apiListEmailOfUser({

        }).then((response)=>{
          if(response.data.errorCode===0) {
            this.emailList = response.data.data.emails
            console.log(this.emailList)
          }else{
            this.$Message.error(this.$t('syserr.'+response.data.errorCode))
          }
        })
      },

      onCertify(){
        this.$router.push({
          name:'submitUserProfile'
        })
      }
    },

    mounted(){
      this.loadAllData()
    }
  }
</script>

<style scoped>
  .card{
    margin: 20px;
  }
  .title_row{
    padding-left: 20px;
  }
</style>
