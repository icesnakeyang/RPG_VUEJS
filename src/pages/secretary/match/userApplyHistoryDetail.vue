<template>
  <div>
    <Card>
      <p slot="title">
        {{apply.title}}
      </p>
      <p>{{applyTime}}</p>
      <p>{{apply.applyUser}}</p>
      <textarea v-model="apply.content"
                style="width: 100%"
                :autosize="{minRows: 5,maxRows: 15}"></textarea>
      <p>{{processTime}}</p>
      <textarea v-model="apply.processRemark"
                style="width: 100%"
                :autosize="{minRows: 5,maxRows: 15}"></textarea>
    </Card>
  </div>
</template>

<script>
  import {apiGetApplyDetail} from "../../../api/api";
  import {rpgFormat} from "../../../common/rpgfun";

  export default {
    name: "userApplyHistoryDetail",
    data(){
      return{
        apply:{}
      }
    },
    computed:{
      applyTime(){
        return rpgFormat.formatTime(this.apply.applyTime)
      },
      processTime(){
        if(this.apply.processTime) {
          return rpgFormat.formatTime(this.apply.processTime)
        }else{
          return ''
        }
      }
    },
    methods:{
      loadAllData(){
        apiGetApplyDetail({
          applyId:this.$store.state.applyId
        }).then((response)=>{
          if(response.data.errorCode===0){
            this.apply=response.data.data
          }else{
            this.$Message.error(this.$t('syserr.'+response.data.errorCode))
          }
        })
      }
    },

    mounted() {
      if(this.$route.params.applyId){
        this.$store.dispatch('saveApplyId', this.$route.params.applyId)
      }
      this.loadAllData()
    }
  }
</script>

<style scoped>

</style>
