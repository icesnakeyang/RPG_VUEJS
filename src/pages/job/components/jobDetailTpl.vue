<template>
  <Card class="card">
    <p slot="title">
      {{job.title}}
    </p>
    <p>{{$t("job.code")}}: {{job.code}}</p>
    <p>{{$t("job.partyAName")}}: {{job.partyAName}}</p>
    <p>{{$t("job.partyBName")}}: {{job.partyBName}}</p>
    <p>{{$t("job.publishTime")}}: {{publishTime}}</p>
    <p>{{$t("partyA.contractTime")}}: {{contractTime}}</p>
    <p>{{$t("job.days")}}: {{job.days}}</p>
    <p>{{$t("job.price")}}: {{job.price}}</p>
    <quill-editor v-model="job.detail"
                  :options="options">
    </quill-editor>
  </Card>
</template>

<script>
  import {quillEditor} from "vue-quill-editor"
  import {rpgFormat} from "../../../common/rpgfun";

  export default {
    name: "jobDetailTpl",
    components:{
      quillEditor
    },
    props:{
      job:{}
    },
    data(){
      return{
        options:{
          modules:{
            toolbar:false
          }
        }
      }
    },
    computed:{
      publishTime(){
        return rpgFormat.formatTime(this.job.createdTime)
      },
      contractTime(){
        if(this.job.contractTime){
          return rpgFormat.formatTime(this.job.contractTime)
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
