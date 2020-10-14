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
      {{$t("job.applyUserNum")}}: {{job.jobApplyNum}}
      </Col>
    </Row>
  </Card>
</template>

<script>
  import {quillEditor} from 'vue-quill-editor'
  import moment from 'moment'

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
        let time=moment(this.job.createdTime).format("YYYY-MM-DD HH:mm")
        return time
      }
    }
  }
</script>

<style scoped>

</style>
