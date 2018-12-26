<template>
  <Card class="card">
    <div @click="onApply(apply.applyId)">
      <p slot="title">
        {{apply.jobTitle}}
      </p>
      <p>{{$t("job.code")}}: {{apply.code}}</p>
      <p>{{$t("job.days")}}: {{apply.days}}</p>
      <p>{{$t("job.price")}}: {{apply.price}}</p>
      <p>{{$t("secretary.match.applyUser")}}: {{apply.userName}}</p>
      <p>{{$t("secretary.match.applyTime")}}: {{applyTime}}</p>
    </div>
  </Card>
</template>

<script>
  import {rpgFormat} from "../../../common/rpgfun";
  import ApplyUserList from "./applyUserList"

  export default {
    name: "secretaryMatchRow",
    components: {
      ApplyUserList
    },
    data() {
      return {}
    },
    props: {
      apply: {}
    },
    computed: {
      applyTime() {
        return rpgFormat.formatTime(this.apply.applyTime);
      }
    },
    methods: {
      onApply(applyId) {
        console.log(applyId)
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .card {
    margin: 20px
  }
</style>
