<template>
  <div>
    <Card class="card">
      <p slot="title">
        <a @click="onApplyUser(apply.applyUserId)">
          {{apply.applyUser}}
        </a>
      </p>
      <p>{{createdTime}}</p>
      <Input type="textarea" v-model="apply.content" :autosize="{minRows: 2,maxRows: 10}" ></Input>
      <Divider></Divider>
      <Button type="primary" @click="onAgree(apply.applyId)">{{$t('secretary.match.btAgree')}}</Button>
      <Button type="error" @click="modal2=true">{{$t('secretary.match.btReject')}}</Button>
    </Card>

    <Modal v-model="modal2">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>{{$t('secretary.match.tipRejectMatch')}}</span>
      </p>
      <Input v-model="remark" type="textarea" :rows="4" :placeholder="$t('secretary.match.placeholderReject')"/>
      <div slot="footer">
        <Button type="error" size="large" @click="onReject(apply.applyId)">{{$t('secretary.match.btReject')}}</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  import {rpgFormat} from "../../../common/rpgfun";
  import {apiAgreeApply} from "../../../api/api";
  import {apiRejectApply} from "../../../api/api";

  export default {
    name: "applyRow",
    data() {
      return {
        modal2: false,
        remark: ''
      }
    },
    props: {
      apply: {}
    },
    computed: {
      createdTime() {
        return rpgFormat.formatTime(this.apply.applyTime)
      }
    },
    methods: {
      onApplyUser(applyUserId) {
        console.log(applyUserId)
        this.$router.push({
          name: 'userApplyHistoryPage',
          params: {
            userId: applyUserId
          }
        })
      },
      onAgree(applyId) {
        console.log(applyId)
        this.$Modal.confirm({
          title: this.$t('common.tipTitleQuestion'),
          content: this.$t('secretary.match.tipAgreeMatch'),
          onOk: () => {
            //match the job to user
            apiAgreeApply({
              applyId: applyId
            }).then((response) => {
              if (response.data.errorCode === 0) {
                this.$Message.success(this.$t('secretary.match.tipAgreeSuccess'))
                this.$router.push({
                  name:'secretaryMatchPage'
                })
              } else {
                this.$Message.error(this.$t('syserr.' + response.data.errorCode))
              }
            })
          },
          onCancel: () => {
          }
        });
      },
      onReject(applyId) {
        //set the apply to reject
        apiRejectApply({
          applyId: applyId,
          remark: this.remark
        }).then((response) => {
          console.log(response)
          if (response.data.errorCode === 0) {
            this.$Message.success(this.$t('secretary.match.tipRejectSuccess'))
            this.$router.push({
              name:'secretaryMatchPage'
            })
          } else {
            this.$Message.error(this.$t('syserr.' + response.data.errorCode))
          }
        })
      }
    }
  }
</script>

<style scoped>
  .card {
    margin-top: 20px;
  }
</style>
