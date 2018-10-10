<template>
  <Card class="card">
    <p slot="title">
      {{job.title}}
    </p>
    <p>{{$t("job.code")}}: {{job.code}}</p>
    <p>{{$t("job.publishUserName")}}: {{job.partyAName}}</p>
    <p>{{$t("job.publishTime")}}: {{createdTime}}</p>
    <p>{{$t("job.days")}}: {{job.days}}</p>
    <p>{{$t("job.price")}}: {{job.price}}</p>
    <quill-editor v-model="job.detail"
                  :options="options">
    </quill-editor>
  </Card>
</template>

<script>
  import {quillEditor} from 'vue-quill-editor'

  export default {
    name: "jobDetailCard",
    components:{
      quillEditor
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
    props: [
      'job'
    ],
    computed: {
      createdTime() {
        var timestamp3 = this.job.createdTime;
        var newDate = new Date();
        newDate.setTime(timestamp3);
        return newDate.toLocaleString()
      }
    }
  }
</script>

<style scoped>

</style>
