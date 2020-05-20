<template>
  <div>
    <Card class="card">
      <p slot="title">
        {{complete.createdUserName}}
      </p>
      <p>{{$t("job.jobComplete.createdTime")}}: {{createdTime}}</p>
      <p v-if="readTime">{{$t("job.jobComplete.readTime")}}: {{readTime}}</p>
      <p v-else="readTime">{{$t("job.jobComplete.readTime")}}:
        <Tag color="error">{{$t('job.jobComplete.unRead')}}</Tag>
      </p>
      <Input type="textarea" v-model="complete.content"
             :autosize="{minRows: 5,maxRows: 15}"
      />
      <Divider></Divider>
      <div v-if="isProcess">
        <div v-if="processResult">
          <p>{{$t('job.jobComplete.processResult')}}:
            <Tag color="success">{{$t('job.jobComplete.accept')}}</Tag>
          </p>
          <p>{{$t('job.jobComplete.processTime')}}: {{processTime}}</p>
          <Input type="textarea" v-model="complete.processRemark"
                 :autosize="{minRows: 5, maxRows: 15}"></Input>
        </div>
        <div v-else>
          <p>{{$t('job.jobComplete.processResult')}}:
            <Tag color="error">{{$t('job.jobComplete.reject')}}</Tag>
          </p>
          <p>{{$t('job.jobComplete.processTime')}}: {{processTime}}</p>
          <Input type="textarea" v-model="complete.processRemark"
                 :autosize="{minRows:5, maxRows:15}"></Input>
        </div>
        <div v-if="processRead">
          <p>{{$t('job.jobComplete.processReadTime')}}:
            {{processReadTime}}
          </p>
        </div>
        <div v-else>
          <p>{{$t('job.jobComplete.processReadTime')}}:
            <Tag color="red">{{$t('job.jobComplete.unRead')}}</Tag>
          </p>
        </div>
      </div>
      <div v-else>
        <p>{{$t('job.jobComplete.processResult')}}:
          <Tag color="red">{{$t('job.jobComplete.unProcess')}}</Tag>
        </p>
      </div>
    </Card>
  </div>
</template>

<script>
    import moment from "moment";

    export default {
        name: "completeRow",
        props: {
            complete: {}
        },
        computed: {
            createdTime() {
                if (this.complete.createdTime) {
                    return moment(this.complete.createdTime).format('YYYY-MM-DD HH:mm')
                }
            },
            readTime() {
                if (this.complete.readTime) {
                    return moment(this.complete.readTime).format('YYYY-MM-DD HH:mm')
                } else {
                    return false
                }
            },
            processTime() {
                if (this.complete.processTime) {
                    return moment(this.complete.processTime).format('YYYY-MM-DD HH:mm')
                } else {
                    return ''
                }
            },
            isProcess() {
                if (this.complete.processTime === null) {
                    return false
                }
                return true
            },
            processResult() {
                if (this.complete.status) {
                    if (this.complete.status === 'REJECT') {
                        return false
                    } else {
                        return true
                    }
                }
            },
            processRead() {
                if (this.complete.processReadTime) {
                    return true
                }
                return false
            },
            processReadTime() {
                if (this.complete.processReadTime) {
                    return moment(this.complete.processReadTime).format('YYYY-MM-DD HH:mm')
                }
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
