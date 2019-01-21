<template>
  <div>
    <Card class="card">
      <p slot="title" >
        {{$t('user.email.title')}}
      </p>
    </Card>
    <Card class="card">
      <p slot="title">
        {{$t('user.phone.title')}}
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
    </Card>
  </div>
</template>

<script>
  import {apiGetUserInfo} from "../../../api/api";
  import {apiListEmailOfUser} from "../../../api/api";
  import {apiListPhoneOfUser} from "../../../api/api";
  import PhoneRow from './phoneRow'

  export default {
    name: "profileDashboard",
    components:{
      PhoneRow
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
          console.log(response)
          if(response.data.errorCode===0){
            this.user=response.data.data.user
          }else{
            this.$Message.error(this.$t('syserr.'+response.data.errorCode))
          }
        })

        apiListPhoneOfUser({

        }).then((response)=>{
          console.log(response)
          if(response.data.errorCode===0) {
            this.phoneList = response.data.data.phones
            console.log(this.phoneList)
          }else{
            this.$Message.error(this.$t('syserr.'+response.data.errorCode))
          }
        })

        apiListEmailOfUser({

        }).then((response)=>{
          this.emailList=response.data.emails
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
