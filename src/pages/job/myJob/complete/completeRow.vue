<template>
  <div>
    <Card class="card">
      <p slot="title">
        {{complete.createdUserName}}
      </p>
      <p>{{$t("jobComplete.createdTime")}}: {{createdTime}}</p>
      <p v-if="readTime">{{$t("jobComplete.readTime")}}: {{readTime}}</p>
      <p v-else="readTime">{{$t("jobComplete.readTime")}}: <Tag color="error">unread</Tag></p>
      <Input type="textarea" v-model="complete.content"
             :autosize="{minRows: 5,maxRows: 15}"
      />
    </Card>
  </div>
</template>

<script>
  import {rpgFormat} from "../../../../common/rpgfun";

  export default {
    name: "completeRow",
    props: {
      complete: {}
    },
    computed:{
      createdTime(){
        return rpgFormat.formatTime(this.complete.createdTime)
      },
      readTime(){
        if(this.complete.readTime){
          return rpgFormat.formatTime(this.complete.readTime)
        }else{
          return false
        }
      }
    },
    mounted(){
      console.log(this.complete)
    }
  }
</script>

<style scoped>
  .card{
    margin: 20px;
  }
</style>
