<template>
  <Card class="card">
    <p slot="title">
      {{task.title}}
    </p>
    <p>{{$t("task.createdUserName")}}: {{task.createdUserName}}</p>
    <p>{{$t("task.createdTime")}}: {{createdTime}}</p>
    <p>{{$t("task.days")}}: {{task.days}}</p>
    <p>{{task.price}}</p>
    <quill-editor v-model="task.detail"
                  :options="options">
    </quill-editor>
  </Card>
</template>

<script>
  import {loadTask} from "../../api/api";

  import {quillEditor} from 'vue-quill-editor'

  export default {
    name: "taskDetail",
    data(){
      return{
        task:[],
        options:{
          modules:{
            toolbar:false
          }
        }
      }
    },
    computed:{
      createdTime(){
        var timestamp3 = this.task.createdTime;
        var newDate = new Date();
        newDate.setTime(timestamp3);
        return newDate.toLocaleString()
      }
    },
    components:{
      quillEditor
    },
    props: {},
    created() {
      this.getAllData();
    },
    methods: {
      getAllData() {
        console.log(this.$route.params)
        loadTask(this.$route.params.taskId)
          .then((response) => {
            this.task=response.data.data;
            console.log(this.task);
          })
      }
    }
  }
</script>

<style scoped>

</style>
