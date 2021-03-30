<template>
  <div style="padding: 20px 0">
    <Card>
      <div v-if="saving">
        <Button type="error" loading></Button>
      </div>
      <div v-else>
        <Button type="error" @click="onOverDueJobs">{{ $t('admin.maintenance.btJobOverdue') }}</Button>
      </div>
    </Card>
  </div>
</template>

<script>
import {apiOverdueJobs} from "../../../api/api";

export default {
  name: "secretaryMaintenance",
  data() {
    return {
      saving: false
    }
  },
  methods: {
    onOverDueJobs() {
      console.log('清理过期任务。任务发布后如果30天内没有人接单，则修改为过期状态，这样就不会显示在任务广场了')
      this.saving = true
      apiOverdueJobs({}).then((res) => {
        console.log(res)
        if (res.data.errorCode === 0) {
          this.$Message.success(this.$t('admin.maintenance.overdueJobsSuccess'))
        } else {
          this.$Message.error(this.$t('syserr.' + res.data.errorCode))
        }
        this.saving = false
      }).catch(() => {
        this.$Message.error(this.$t('syserr.30000'))
        this.saving = false
      })
    }
  }
}
</script>

<style scoped>

</style>
