<template>
  <div>
    <Card class="card">
      <div slot="title" class="card_head_view">
      <span class="card_head_view_left">
        {{ log.createdUserName }}
      </span>
        <span class="card_head_view_right">
          <a @click="btDetele" style="color:#1d1d1d"><Icon type="ios-trash" size="20"/></a>
      </span>
      </div>
      <p>{{ $t("job.log.createdTime") }}: {{ createdTime }}</p>
      <p v-if="readTime">{{ $t("job.log.readTime") }}: {{ readTime }}</p>
      <p v-else="readTime">{{ $t("job.log.readTime") }}:
        <Tag color="error">{{ unRead }}</Tag>
      </p>
      <quill-editor v-model="log.content" :options="options"></quill-editor>
    </Card>
  </div>
</template>

<script>

  import moment from "moment";
  import {quillEditor} from "vue-quill-editor";
  import {apiDeleteJobLog} from "../../../../api/api";

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
    methods: {
      btDetele() {
        if (this.log.readTime) {
          //对方已查看的任务，不能删除了
          this.$Message.show(this.$t('job.log.tip1'))
        } else {
          this.$Modal.confirm({
            title: this.$t('common.tipTitleQuestion'),
            content: this.$t('job.log.tipConfirmDeteleLog'),
            onOk: () => {
              const params = {
                jobLogId: this.log.jobLogId
              }
              apiDeleteJobLog(params).then((res) => {
                if (res.data.errorCode === 0) {
                  this.$Message.success(this.$t('job.log.tip2'))
                  this.$emit('onRefreshData')
                } else {
                  this.$Message.error(this.$t('syserr.' + res.data.errorCode))
                }
              })
            },
            onCancel: () => {

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

  .card_head_view {
    display: flex;
    flex-direction: row;
  }

  .card_head_view_left {
    display: flex;
    justify-content: flex-start;
    width: 50%;
  }

  .card_head_view_right {
    display: flex;
    justify-content: flex-end;
    width: 50%;
  }
</style>
