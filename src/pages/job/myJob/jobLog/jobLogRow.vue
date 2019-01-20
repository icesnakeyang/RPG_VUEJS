<template>
  <div>
    <Card class="card">
      <p slot="title">
        {{log.createdUserName}}
      </p>
      <p>{{$t("job.log.createdTime")}}: {{createdTime}}</p>
      <p v-if="readTime">{{$t("job.log.readTime")}}: {{readTime}}</p>
      <p v-else="readTime">{{$t("job.log.readTime")}}: <Tag color="error">{{unRead}}</Tag></p>
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
          return false
        }
      },
      unRead(){
        return this.$t('common.unRead')
      }
    }
  }
</script>

<style scoped>
  .card{
    margin: 20px;
  }
</style>
