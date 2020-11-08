<template>
  <div>
    <Card>
      <Input search enter-button placeholder="Enter something..."
             @on-search="onSearch"
             v-model="newMemberPhone"/>
      <!--      <Button type="primary" @click="onAddMember">{{ $t('team.btAddMember') }}</Button>-->
    </Card>

    <div v-for="(item,index) in userInfoList">
      <MemberRow :data="item"></MemberRow>
    </div>
  </div>
</template>

<script>
import {quillEditor} from 'vue-quill-editor'
import {apiListUser} from "../../api/api";
import MemberRow from "./memberRow";

export default {
  name: "teamAddMember",
  components: {
    quillEditor,
    MemberRow
  },
  data() {
    return {
      modalNewMember: false,
      newMemberPhone: '',
      userInfoList: []
    }
  },
  methods: {
    onAddMember() {
      this.modalNewMember = true
    },
    onSearch() {
      const params = {
        phone: this.newMemberPhone
      }
      apiListUser(params).then((response) => {
        console.log(response)
        if (response.data.errorCode === 0) {
          this.userInfoList = response.data.data.userInfoList
          console.log(this.userInfoList)
        } else {
          this.$Message.error(this.$t('syserr.' + response.data.errorCode))
        }
      }).catch(() => {
        this.$Message.error(this.$t('syserr.30000'))
      })

    },
    onConfirmAddMember() {

    }
  }
}
</script>

<style scoped>

</style>
