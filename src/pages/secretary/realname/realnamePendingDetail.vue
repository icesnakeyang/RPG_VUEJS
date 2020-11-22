<template>
  <div>
    <Card style="margin-top: 20px">
      <p slot="title">
        {{ $t('admin.realname.title1') }}
      </p>
      <p>{{ $t('admin.realname.realname') }}:{{ realname.realName }}</p>
      <p>{{ $t('admin.realname.idcardno') }}:{{ realname.idcardNo }}</p>
      <span v-if="userStatus">
        <Tag color="blue">{{ $t('admin.realname.status1') }}</Tag>
      </span>
      <span v-if="realnameVerify">
        <Tag color="success">{{ $t('admin.realname.verify1') }}</Tag>
      </span>
    </Card>

    <Card style="margin-top: 20px">
      <Button type="primary" @click="onAgree">{{ $t('admin.realname.btAgree') }}</Button>
      <Button type="error" @click="onReject">{{ $t('admin.realname.btReject') }}</Button>
    </Card>

    <Modal
      v-model="modalAgree"
      :title="$t('admin.realname.modalAgreeTitle')"
      @on-ok="btAgreeOk">
    </Modal>

    <Modal
      v-model="modalReject"
      :title="$t('admin.realname.modalRejectTitle')"
      @on-ok="btRejectOk">
      <div>
        <Form :label-width="100">
          <FormItem :label="$t('admin.realname.rejectReason')">
            <Input v-model="remark"></Input>
          </FormItem>
        </Form>
      </div>
    </Modal>
  </div>
</template>

<script>
import {apiAgreeRealname, apiGetRealnamePending, apiRejectRealname} from "../../../api/api";

export default {
  name: "realnamePendingDetail",
  data() {
    return {
      realname: {},
      modalAgree: false,
      modalReject: false,
      remark:''
    }
  },
  computed: {
    userStatus() {
      if (this.realname.status === 'ACTIVE') {
        return true
      }
      return false
    },
    realnameVerify() {
      if (this.realname.verify === 'PENDING') {
        return true
      }
      return false
    }
  },
  methods: {
    loadAllData() {
      let params = {
        userId: this.$route.params.pendingUserId
      }
      apiGetRealnamePending(params).then((response) => {
        console.log(response)
        if (response.data.errorCode === 0) {
          this.realname = response.data.data.realName
        } else {
          this.$Message.error(this.$t('syserr.' + response.data.errorCode))
        }
      }).catch(() => {
        this.$Message.error(this.$t('syserr.30000'))
      })
    },
    onAgree() {
      this.modalAgree = true
    },
    onReject() {
      this.modalReject = true
    },
    btAgreeOk() {
      console.log("同意申请")
      let params={
        userId:this.$route.params.pendingUserId
      }
      apiAgreeRealname(params).then((response)=>{
        if(response.data.errorCode===0){
          this.$Message.success(this.$t('admin.realname.agreeTip'))
          this.$router.push({
            name:'realnameList'
          })
        }else{
          this.$Message.error(this.$t('syserr.'+response.data.errorCode))
        }
      }).catch(()=>{
        this.$Message.error(this.$t('syserr.30000'))
      })
    },
    btRejectOk() {
      console.log("拒绝申请")
      let params={
        userId:this.$route.params.pendingUserId,
        remark:this.remark
      }
      apiRejectRealname(params).then((response)=>{
        if(response.data.errorCode===0){
          this.$Message.success(this.$t('admin.realname.rejectTip'))
          this.$router.push({
            name:'realnameList'
          })
        }else{
          this.$Message.error(this.$t('syserr.'+response.data.errorCode))
        }
      }).catch(()=>{
        this.$Message.error(this.$t('syserr.30000'))
      })
    }
  },
  mounted() {
    this.loadAllData()
  }
}
</script>

<style scoped>

</style>
