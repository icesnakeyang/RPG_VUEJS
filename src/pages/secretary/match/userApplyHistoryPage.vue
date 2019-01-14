<template>
  <div>
    <UserApplyHistoryRow v-for="(item, index) in applyHistoryList"
                         :apply="item" :key="index">
    </UserApplyHistoryRow>
  </div>
</template>

<script>
  import {apiListApplyHistory} from "../../../api/api";
  import UserApplyHistoryRow from "./userApplyHistoryRow"

  export default {
    name: "userApplyHistoryPage",
    components: {
      UserApplyHistoryRow
    },
    data() {
      return {
        applyHistoryList: []
      }
    },
    methods: {
      loadAllData() {
        apiListApplyHistory({
          pageIndex: 0,
          pageSize: 20,
          userId:this.$store.state.userId
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.applyHistoryList = response.data.data.jobApply
          } else {
            this.$Message.error(this.$t("syserr." + response.data.errorCode))
          }
        })
      }
    },
    mounted() {
      if(this.$route.params.userId){
        this.$store.dispatch('saveUserId', this.$route.params.userId)
      }
      this.loadAllData()
    }
  }
</script>

<style scoped>

</style>
