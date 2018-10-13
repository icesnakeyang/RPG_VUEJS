<template>
  <div>
    <Card class="card">
      <p slot="title">
        {{log.createdUserName}}
      </p>
      <p>{{$t("jobLog.createdTime")}}: {{createdTime}}</p>
      <p>{{$t("jobLog.readTime")}}: {{readTime}}</p>
      <Input type="textarea" v-model="log.content"
             :autosize="{minRows: 5,maxRows: 15}"
      />
    </Card>
  </div>
</template>

<script>
  import {rpgFormat} from "../../../../common/rpgfun";

  export default {
    name: "jobLogRow",
    props:{
      log:{}
    },
    computed:{
      createdTime(){
        return rpgFormat.formatTime(this.log.createdTime)
      },
      readTime(){
        if(this.log.readTime){
          return rpgFormat.formatTime(this.log.readTime)
        }else{
          return "Unread"
        }
      }
    }
  }
</script>

<style scoped>
  .card{
    margin: 20px;
  }
</style>
