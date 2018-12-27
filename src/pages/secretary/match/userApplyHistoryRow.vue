<template>
	<div>
    <Card class="card">
      <p slot="title">{{apply.title}}</p>
      <p>{{$t("job.price")}}：{{apply.price}}</p>
      <p>{{$t("apply.applyTime")}}：{{applyTime}}</p>
      <p>{{$t("apply.applyProcessResult")}}：{{apply.result}}</p>
      <p>{{$t("job.status")}}：{{apply.status}}</p>
    </Card>
  </div>
</template>

<script>
  import {rpgFormat} from "../../../common/rpgfun";

  export default {
        name: "userApplyHistoryRow",
      props:{
          apply:{}
      },
      computed:{
          applyTime(){
            return rpgFormat.formatTime(this.apply.applyTime)
          }
      },
      mounted(){
          console.log(this.apply)
      }
    }
</script>

<style scoped>
  .card{
    margin: 20px;
  }
</style>
