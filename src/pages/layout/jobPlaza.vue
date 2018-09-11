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
  import {loadJobs} from '@/api/api'

  export default {
    name: "jobPlaza",
    data(){
      return{
        jobs:[]
      }
    },
    mounted() {
      console.log(1);
      loadJobs().then((data)=>{
        console.log(data);
        this.jobs=data.data.data;
        console.log(this.jobs);
      });

    }
  }
</script>

<style scoped>
  .card {
    margin: 20px;
  }
</style>
