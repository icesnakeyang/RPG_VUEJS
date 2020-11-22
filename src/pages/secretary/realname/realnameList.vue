<template>
  <div>
    <RealnameRow v-for="(item, index) in realnameList"
                 :key="index"
                 :theData="item">
    </RealnameRow>
    <Page :total="totalRealname" @on-change="onPage" style="margin-top:20px"></Page>
  </div>
</template>

<script>
import {apiListRealnamePending} from "../../../api/api";
import RealnameRow from './realnameRow'

export default {
  name: "realnameList",
  components: {
    RealnameRow
  },
  data() {
    return {
      pageIndex: 1,
      pageSize: 10,
      totalRealname: 0,
      realnameList: []
    }
  },
  methods: {
    loadAllData() {
      let params = {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }
      apiListRealnamePending(params).then((response) => {
        if (response.data.errorCode === 0) {
          this.totalRealname = response.data.data.totalRealname
          this.realnameList = response.data.data.realnameList
        } else {
          this.$Message.error(this.$t('syserr.' + response.data.errorCode))
        }
      }).catch(() => {
        this.$Message.error(this.$t('syserr.30000'))
      })
    },

    onPage(e){
      this.pageIndex=e
      this.loadAllData()
    }
  },
  mounted() {
    this.loadAllData()
  }
}
</script>

<style scoped>

</style>
