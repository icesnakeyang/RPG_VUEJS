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
      <Button type="primary" @click="onAgree(apply.applyId)">ok</Button>
      <Button type="error" @click="onReject(apply.applyId)">reject</Button>
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
      },
      onReject(applyId) {
        console.log(applyId)
      }
    }
  }
</script>

<style scoped>
  .card {
    margin-top: 20px;
  }
</style>
