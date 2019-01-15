<template>

</template>

<script>
  import {quillEditor} from "vue-quill-editor"
  import {rpgFormat} from "../../../../common/rpgfun";

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
