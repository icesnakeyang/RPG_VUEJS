<template>
  <div>
    <Card class="card">
      <p slot="title">
        {{log.createdUserName}}
        <Button type="error" @click="btDetele">删除</Button>
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
    },
    methods:{
      btDetele(){
        console.log('detete')
        console.log(this.log)
        if(this.log.readTime){
          //对方已查看的任务，不能删除了
          this.$Message.show(this.$t('job.log.tip1'))
        }else{
          console.log('真的要删除了')
          this.$Modal.confirm({
            title: this.$t('common.tipTitleQuestion'),
            content: this.$t('job.log.tipConfirmDeteleLog'),
            onOk: () => {
              this.$Message.info('Clicked ok');
              console.log(this.log.jobLogId)
            },
            onCancel: () => {
              this.$Message.info('Clicked cancel');
            }
          });
        }
      }
    }
  }
</script>

<style scoped>
  .card {
    margin: 20px;
  }
</style>
