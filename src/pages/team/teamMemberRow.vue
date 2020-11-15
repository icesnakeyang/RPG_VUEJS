<template>
  <div>
    <Card>
      <p slot="title">{{data.realName}}</p>
    </Card>
  </div>
</template>

<script>
    export default {
        name: "teamMemberRow",
        data(){
            return{

            }
        },
        props: [
            'data'
        ],

    }
</script>

<style scoped>

</style>
