<template>
  <div>
    <Card class="card">
      <p slot="title">
        <a @click="onApplyUser(apply.applyUserId)">
          {{apply.applyUser}}
        </a>
      </p>
      <p>{{createdTime}}</p>
      <Divider></Divider>
      <Button type="primary" @click="onAgree(apply.applyId)">{{$t('secretary.match.btAgree')}}</Button>
      <Button type="error" @click="onReject(apply.applyId)">{{$t('secretary.match.btReject')}}</Button>
    </Card>
  </div>
</template>

<script>
  import {rpgFormat} from "../../../common/rpgfun";

  export default {
    name: "applyRow",
    props: {
      apply: {}
    },
    computed: {
      createdTime() {
        return rpgFormat.formatTime(this.apply.applyTime)
      }
    },
    methods: {
      onApplyUser(applyUserId){
        console.log(applyUserId)
        this.$router.push({
          name:'userApplyHistoryPage',
          params:{
            userId:applyUserId
          }
        })
      },
      onAgree(applyId) {
        console.log(applyId)
        this.$Modal.confirm({
          title: this.$t('common.tipTitleQuestion'),
          content: this.$t('secretary.match.tipAgreeMatch'),
          onOk: () => {
            //match the job to user

          },
          onCancel: () => {
          }
        });
      },
      onReject(applyId) {
        this.$Modal.confirm({
          title:this.$t('common.tipTitleQuestion'),
          content:this.$t('secretary.match.tipRejectMatch'),
          onOk:()=>{
            //set the apply to reject

          },
          onCancel:()=>{

          }
        })
      }
    }
  }
</script>

<style scoped>
  .card {
    margin-top: 20px;
  }
</style>
