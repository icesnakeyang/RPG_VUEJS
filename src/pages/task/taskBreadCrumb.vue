<template>
	<div>
    <span>task parent: {{task.pid}}</span>
  </div>
</template>

<script>
  export default {
    name: "taskBreadCrumb",
    props:{
      task:{}
    },
    computed:{
      pid(){
        if(!this.task){
          return 0
        }
        return this.task.pid
      }
    },
    methods:{

    },
    mounted(){

    }
  }
</script>

<style scoped>

</style>
