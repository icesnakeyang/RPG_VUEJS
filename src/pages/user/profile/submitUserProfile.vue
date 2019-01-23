<template>
  <div>
    <Form :label-width="80">
      <FormItem :label="this.$t('user.realname.realName')">
        <Input v-model="realName.realName" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem :label="this.$t('user.realname.idCardNo')">
        <Input v-model="realName.idcardNo" placeholder="Enter something..."></Input>
      </FormItem>

      <FormItem>
        <Button type="primary" @click="onSubmit">{{$t('user.realname.btSubmit')}}</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import {apiGetUserProfile} from "../../../api/api";
  import {apiSaveRealName} from "../../../api/api";

  export default {
    name: "submitUserProfile",
    data() {
      return {
        realName: {}
      }
    },
    methods:{
      loadAllData() {
        apiGetUserProfile({
        }).then((response)=>{
          if(response.data.errorCode===0){
            this.realName=response.data.data.realname
          }else {
            this.$Message.error(this.$t('syserr.'+response.data.errorCode))
          }
        })
      },

      onSubmit(){
        apiSaveRealName({
          realName:this.realName.realName,
          idcardNo:this.realName.idcardNo
        }).then((response)=>{
          if(response.data.errorCode===0){
            this.$store.dispatch('saveRealName', this.realName.realName)
            this.$Message.success(this.$t('user.realname.tipSaveSuccess'))
          }else{
            this.$Message.error(this.$t('user.realname.tipSaveError'))
          }
        })
      }
    },
    mounted() {
      this.loadAllData()
    }
  }
</script>

<style scoped>

</style>
