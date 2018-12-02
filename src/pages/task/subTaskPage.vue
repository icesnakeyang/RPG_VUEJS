<template>
  <div>
    sub task page
  </div>
</template>

<script>
  import {loadTask} from "../../api/api";

  export default {
    name: "subTaskPage",
    methods:{
      loadData(){

      }
    },
    mounted() {
      console.log(this.$route.params.taskId)
      console.log(this.$store.state.taskId)
    }
  }
</script>

<style scoped>

</style>
