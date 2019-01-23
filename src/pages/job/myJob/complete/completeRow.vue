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
      </div>
      <div v-else>
        <p>{{$t('job.jobComplete.processResult')}}:
          <Tag color="red">{{$t('job.jobComplete.unProcess')}}</Tag>
        </p>
      </div>
      <div v-if="processRead">
        <p>{{$t('job.jobComplete.processReadTime')}}:
          {{complete.processReadTime}}
        </p>
      </div>
      <div v-else>
        <p>{{$t('job.jobComplete.processReadTime')}}:
          <Tag color="red">{{$t('job.jobComplete.unRead')}}</Tag>
        </p>
      </div>
    </Card>
  </div>
</template>

<script>
  import {rpgFormat} from "../../../../common/rpgfun";

  export default {
    name: "completeRow",
    props: {
      complete: {}
    },
    computed: {
      createdTime() {
        return rpgFormat.formatTime(this.complete.createdTime)
      },
      readTime() {
        if (this.complete.readTime) {
          return rpgFormat.formatTime(this.complete.readTime)
        } else {
          return false
        }
      },
      processTime() {
        if (this.complete.processTime) {
          return rpgFormat.formatTime(this.complete.processTime)
        } else {
          return ''
        }
      },
      isProcess() {
        if (this.complete.result === null) {
          return false
        }
        return true
      },
      processResult() {
        if (this.complete.result) {
          if (this.complete.result === 'REJECT') {
            return false
          } else {
            return true
          }
        }
      },
      processRead(){
        if(this.complete.processReadTime){
          return true
        }
        return false
      }
    },
    mounted() {
      console.log(this.complete)
    }
  }
</script>

<style scoped>
  .card {
    margin: 20px;
  }
</style>
