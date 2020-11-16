<template>
  <div>
    <Card>
      <p slot="title">{{data.realName}}</p>
      <p>角色：{{roleType}}</p>
      <Button type="error" size="small" @click="onGetoff">{{$t('team.btDelete')}}</Button>
    </Card>
  </div>
</template>

<script>
    import {apiGetoffTeamMember} from "../../api/api";

    export default {
        name: "teamMemberRow",
        data(){
            return{

            }
        },
        props: [
            'data'
        ],
      computed:{
          roleType(){
            if(this.data.memberType==='MANAGER'){
              return this.$t('team.manager')
            }
            if(this.data.memberType==='NORMAL'){
              return this.$t('team.normal')
            }
          }
      },
      methods:{
        onGetoff(){
          console.log(this.data.userId)
          console.log(this.data.teamId)
          let params={
            userId:this.data.userId,
            teamId:this.data.teamId
          }
          apiGetoffTeamMember(params).then((response)=>{
            console.log(response)
            if(response.data.errorCode===0){
              this.$Message.success(this.$t('team.tipDeleteSuccess'))
              this.$parent.loadAllData()
            }else {
              this.$Message.error(this.$t('syserr.'+this.response.errorCode))
            }
          }).catch(()=>{
            this.$Message.error(this.$t('syserr.30000'))
          })
        }
      }

    }
</script>

<style scoped>

</style>
