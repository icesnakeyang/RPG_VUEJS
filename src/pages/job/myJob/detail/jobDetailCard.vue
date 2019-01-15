<template>
  <Card class="card">
    <p slot="title">
      {{job.title}}
    </p>
    <p>{{$t("task.code")}}: {{job.code}}</p>
    <p>{{$t("job.partyAName")}}: {{job.partyAName}}</p>
    <p>{{$t("job.publishTime")}}: {{createdTime}}</p>
    <p>{{$t("task.days")}}: {{job.days}}</p>
    <p>{{$t("task.price")}}: {{job.price}}</p>
    <quill-editor v-model="job.detail"
                  :options="options">
    </quill-editor>
    <Divider></Divider>
    <Row>
      <Col :xs="6" :sm="2" :md="2" :lg="2">
        <P>{{$t("job.applyUserNum")}}: {{job.jobApplyNum}}</P>
      </Col>
    </Row>
  </Card>
</template>

<script>
  import {quillEditor} from 'vue-quill-editor'

  export default {
    name: "jobDetailCard",
    components: {
      quillEditor
    },
    data() {
      return {
        options: {
          modules: {
            toolbar: false
          }
        }
      }
    },
    props: [
      'job'
    ],
    computed: {
      createdTime() {
        var timestamp3 = this.job.createdTime;
        var newDate = new Date();
        newDate.setTime(timestamp3);
        return newDate.toLocaleString()
      }
    }
  }
</script>

<style scoped>

</style>
