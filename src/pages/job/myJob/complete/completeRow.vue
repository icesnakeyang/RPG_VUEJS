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
      <Divider></Divider>
      <p>process result: {{complete.result}}</p>
      <p>process time: {{processTime}}</p>
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
      },
      processTime(){
        if(this.complete.processTime){
          return rpgFormat.formatTime(this.complete.processTime)
        }else {
          return false
        }
      }
    },
    mounted(){
    }
  }
</script>

<style scoped>
  .card{
    margin: 20px;
  }
</style>
