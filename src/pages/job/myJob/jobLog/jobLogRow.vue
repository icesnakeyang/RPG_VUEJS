<template>
  <div>
    <Card class="card">
      <p slot="title">
        {{log.createdUserName}}
      </p>
      <p>{{$t("job.log.createdTime")}}: {{createdTime}}</p>
      <p v-if="readTime">{{$t("job.log.readTime")}}: {{readTime}}</p>
      <p v-else="readTime">{{$t("job.log.readTime")}}:
        <Tag color="error">{{unRead}}</Tag>
      </p>
      <quill-editor v-model="log.content" :options="options"></quill-editor>
    </Card>
  </div>
</template>

<script>

  import moment from "moment";
  import {quillEditor} from "vue-quill-editor";

  export default {
    name: "jobLogRow",
    components: {
      quillEditor
    },
    data() {
      return {
        options: {
          modules: {
            toolbar: false
          },
          readOnly: true
        },
      }
    },
    props: {
      log: {}
    },
    computed: {
      createdTime() {
        return moment(this.log.createdTime).format('YYYY-MM-DD HH:mm')
      },
      readTime() {
        if (this.log.readTime) {
          return moment(this.log.readTime).format('YYYY-MM-DD HH:mm')
        } else {
          return false
        }
      },
      unRead() {
        return this.$t('common.unRead')
      }
    }
  }
</script>

<style scoped>
  .card {
    margin: 20px;
  }
</style>
