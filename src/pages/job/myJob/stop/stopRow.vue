<template>
  <div>
    <Card class="card">
      <p slot="title">
        {{stop.createdUserName}}
      </p>
      <p>{{$t("jobStop.createdTime")}}: {{createdTime}}</p>
      <p v-if="readTime">{{$t("jobStop.readTime")}}: {{readTime}}</p>
      <p v-else-if="readTime">{{$t("jobStop.readTime")}}:
        <Tag color="error">{{$t("common.unRead")}}</Tag>
      </p>
      <p>{{$t("jobStop.refund")}}:
        <Tag color="warning">{{stop.refund}}</Tag>
      </p>
      <Input type="textarea" v-model="stop.content"
             :autosize="{minRows: 5,maxRows: 15}"
      />
      <Divider></Divider>
      <p v-if="stop.result">{{$t("jobStop.processResult")}}: {{stop.result}}</p>
      <p v-if="processTime">{{$t("jobStop.processTime")}}: {{processTime}}</p>
      <p v-if="stop.processUserName">{{$t("jobStop.processUserName")}}: {{stop.processUserName}}</p>
    </Card>
  </div>
</template>

<script>

  import {rpgFunc} from "../../../../common/rpgfun";

  export default {
    name: "stopRow",
    props: {
      stop: {}
    },
    computed: {
      createdTime() {
        return rpgFunc.formatTime(this.stop.createdTime);
      },
      readTime() {
        if (this.stop.readTime) {
          return rpgFunc.formatTime(this.stop.readTime)
        } else {
          return false
        }
      },
      processTime() {
        if (this.stop.processTime) {
          return rpgFunc.formatTime(this.stop.processTime)
        } else {
          return false
        }
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .card{
    margin: 20px;
  }
</style>
