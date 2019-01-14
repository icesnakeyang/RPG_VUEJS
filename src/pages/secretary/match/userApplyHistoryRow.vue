<template>
  <div>
    <Card class="card">
      <p slot="title">
        <a @click="onDetail(apply.applyId)">
          {{apply.title}}
        </a>
      </p>
      <p>{{$t("admin.secretary.applyUsername")}}：{{apply.username}}</p>
      <p>{{$t("admin.secretary.applyTime")}}：{{applyTime}}</p>
      <p>{{$t("admin.secretary.price")}}：{{apply.price}}</p>
      <p>{{$t("admin.secretary.applyProcessResult")}}：{{processResult}}</p>
      <p>{{$t("admin.secretary.jobStatus")}}：{{jobStatus}}</p>
    </Card>
  </div>
</template>

<script>
  import {rpgFormat} from "../../../common/rpgfun";

  export default {
    name: "userApplyHistoryRow",
    props: {
      apply: {}
    },
    computed: {
      applyTime() {
        return rpgFormat.formatTime(this.apply.applyTime)
      },
      processResult() {
        if (this.apply.processResult === null) {
          return this.$t('common.status.unProcess')
        }
        if (this.apply.processResult === 'REJECT') {
          return this.$t('common.status.reject')
        }
      },
      jobStatus() {
        if (this.apply.jobStatus === 'MATCHING') {
          return this.$t('common.status.matching')
        }
      }
    },
    methods: {
      onDetail(data) {
        this.$router.push({
          name:'userApplyHistoryDetail',
          params:{
            applyId:data
          }
        })
      }
    },

    mounted() {
    }
  }
</script>

<style scoped>
  .card {
    margin: 20px;
  }
</style>
