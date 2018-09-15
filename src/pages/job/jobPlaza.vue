<template>
  <div>
    <Card class="card" v-for="item in jobs">
      <p slot="title">{{item.title}}</p>
      <p>{{$t("label.title")}}: {{item.detail}}</p>
      <p>{{$t("label.price")}}: {{item.price}}</p>
      <p>{{$t("label.days")}}: {{item.days}}</p>
    </Card>
  </div>
</template>

<script>
  import {loadJobPlaza} from '@/api/api'

  export default {
    name: "jobPlaza",
    data(){
      return{
        jobs:[]
      }
    },
    computed:{
      token(){
        return this.$store.state.token
      },
      username(){
        return this.$store.state.username
      }
    },

    mounted() {
      loadJobPlaza('rpg').then((data)=>{
        this.jobs=data.data.data;
      });

    }
  }
</script>

<style scoped>
  .card {
    margin: 20px;
  }
</style>
