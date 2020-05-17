<template>
  <Card class="card">
    <p slot="title">
      {{job.title}}
    </p>
    <div style="margin: 0 5px 10px">
      <Row>
        <Col :xs="24" :sm="12" :md="12" :lg="12">{{$t("task.code")}}: {{job.code}}</Col>
        <Col :xs="24" :sm="12" :md="12" :lg="12">{{$t("task.price")}}: <span class="price_text">{{job.price}}</span>
        </Col>
      </Row>
      <Row>
        <Col :xs="24" :sm="12" :md="12" :lg="12">{{$t("job.partyAName")}}: {{job.partyAName}}</Col>
        <Col :xs="24" :sm="12" :md="12" :lg="12"></Col>
      </Row>
      <Row>
        <Col :xs="24" :sm="12" :md="12" :lg="12">{{$t("job.publishTime")}}: {{createdTime}}</Col>
        <Col :xs="24" :sm="12" :md="12" :lg="12"></Col>
      </Row>
      <Row>
        <Col :xs="24" :sm="12" :md="12" :lg="12">{{$t("task.days")}}: {{job.days}}</Col>
        <Col :xs="24" :sm="12" :md="12" :lg="12">{{$t("job.jobStatus")}}:
          <span v-if="isPending"><Tag color="error">{{$t("common.status.matching")}}</Tag></span>
        </Col>
      </Row>
    </div>
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
    import {rpgFunc} from "../../../common/rpgfun";

    export default {
        name: "publicJobDetailCard",
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
                return rpgFunc.formatTime(this.job.createdTime)
            },
            isPending(){
                if(this.job.status==='PENDING'){
                    return true
                }
                return false
            }
        }
    }
</script>

<style scoped>
  .price_text {
    font-family: Arial;
    color: #ff4721;
    font-size: 16px;
  }
</style>
