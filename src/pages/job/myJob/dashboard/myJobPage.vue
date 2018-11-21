<template>
    <div>这里显示我的job的各种统计信息，相当于Dashboard</div>
</template>

<script>
    export default {
        name: "myJobPage",
      mounted(){
          console.log(this.$store.state)
      }
    }
</script>

<style scoped>

</style>
