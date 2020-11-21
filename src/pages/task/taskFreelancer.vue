<template>
  <div>
    <Breadcrumb :style="{margin:'24px 0'}">
      <BreadcrumbItem to="taskPage">{{ $t('navigator.myTask') }}</BreadcrumbItem>
      <BreadcrumbItem>{{ $t('navigator.publishTask') }}</BreadcrumbItem>
    </Breadcrumb>
    <Content style="min-height: 450px">
      <Form :model="task" :label-width="0">
        <FormItem v-show="errInput">
          <Alert type="error" show-icon>{{ errMsg }}</Alert>
        </FormItem>
        <FormItem :label="$t('task.title')">
          <Input v-model="task.title"/>
        </FormItem>
        <FormItem :label="$t('task.code')">
          <Input v-model="task.code"/>
        </FormItem>
        <FormItem :label="$t('task.days')">
          <InputNumber v-model="task.days"/>
        </FormItem>
        <FormItem :label="$t('task.price')">
          <InputNumber v-model="task.price"/>
        </FormItem>

        <div>{{ $t('task.detail') }}</div>
        <FormItem>
          <quill-editor v-model="task.detail"
                        :options="editorOptions"
          ></quill-editor>
        </FormItem>

        <FormItem>
          <Select v-model="selectedTeamId"
                  style="width:200px"
                  :placeholder="$t('team.selectTeam')"
                  @on-change="onTeamSelect">
            <Option v-for="item in teamList"
                    :value="item.teamId"
                    :key="item.ids">
              {{ item.teamName }}
            </Option>
          </Select>
          <Select v-model="selectedMemberId"
                  @on-change="onMemberSelect"
                  :placeholder="$t('team.selectTeamMember')"
                  style="width:200px">
            <Option v-for="item in teamMemberList"
                    :value="item.userId"
                    :key="item.ids">
              {{ item.realName }}
            </Option>
          </Select>
        </FormItem>

        <FormItem v-show="!saving">
          <Button type="primary" @click="clickPublish">{{ $t("job.publish") }}</Button>
        </FormItem>
        <FormItem v-show="saving">
          <template>
            <!--<Spin size="small"></Spin>-->
            <!--<Spin></Spin>-->
            <Spin size="large"></Spin>
          </template>
        </FormItem>
      </Form>
    </Content>
  </div>
</template>

<script>
import {apiGetTaskDetailByTaskId, apiListMyTeam, apiListTeamMember} from "../../api/api";
import {apiPublishNewJob} from "../../api/api";
import {quillEditor} from "vue-quill-editor";
import {ImageResize} from "quill-image-resize-module"

export default {
  name: "taskFreelancer",
  components: {
    quillEditor
  },
  data() {
    return {
      task: {},
      teamList: [],
      errInput: false,
      errMsg: '',
      saving: false,
      editorOptions: {
        modules: {
          imageResize: true
        }
      },
      selectedTeamId: '',
      teamMemberList: [],
      selectedMemberId: ''
    }
  },
  computed: {
    taskID() {
      this.task.taskId = this.$route.params.taskId;
      return this.task.taskId;
    }
  },
  methods: {
    loadAllData() {
      apiGetTaskDetailByTaskId({
        taskId: this.$store.state.taskId
      }).then((response) => {
        if (response.data.errorCode === 0) {
          this.task = response.data.data.task;
        } else {
          this.$Message.error(this.$t('syserr.' + response.data.errorCode))
        }
      }).catch(() => {
        this.$Message.error(this.$t('syserr.30000'))
      })

      let params = {}
      apiListMyTeam(params).then((response) => {
        if (response.data.errorCode === 0) {
          this.teamList = response.data.data.teamList
        } else {
          this.$Message.error(this.$t('syserr.' + response.data.errorCode))
        }
        console.log(response)
      }).catch(() => {
        this.$Message.error(this.$t('syserr.30000'))
      })
    },
    clickPublish() {
      // if (this.inputCheck()) {
      //   return;
      // }
      this.saving = true;
      let params = {
        taskId: this.task.taskId,
        title: this.task.title,
        code: this.task.code,
        days: this.task.days,
        price: this.task.price,
        detail: this.task.detail,
        teamId: this.selectedTeamId,
        memberId: this.selectedMemberId
      }

      apiPublishNewJob(params).then((response) => {
        if (response.data.errorCode === 0) {
          this.$Message.success(this.$t("job.succPublish"));
          // jump to job detail
          this.$router.push({
            name: "jobDetail",
            params: {
              jobId: response.data.data.jobId
            }
          })
        } else {
          this.errInput = true;
          this.errMsg = this.$t("syserr." + response.data.errorCode);
          this.$Message.error(this.$t("syserr." + response.data.errorCode));
          this.saving = false;
        }
      })
    },
    inputCheck() {
      this.errInput = false;
      if (!this.task.taskId) {
        this.errInput = true;
        this.errMsg = this.$t("task.publishTaskFail");
      }
      if (!this.task.title) {
        this.errInput = true;
        this.errMsg = this.$t("task.checkTitle");
      }
      if (!this.task.days) {
        this.errInput = true;
        this.errMsg = this.$t("task.checkDays");
      }
      if (!this.task.price) {
        if (this.task.price !== 0) {
          this.errInput = true
          this.errMsg = this.$t("task.checkPrice");
        }
      }
      if (!this.task.detail) {
        this.errInput = true
        this.errMsg = this.$t("task.checkDetail")
      }
      return this.errInput;
    },
    loadTeamMember() {
      let params = {
        teamId: this.selectedTeamId
      }
      apiListTeamMember(params).then((response) => {
        console.log(response)
        if (response.data.errorCode === 0) {
          console.log(response.data.data)
          this.teamMemberList = response.data.data.teamUserList
        }
        console.log(this.teamMemberList)
      })
    },

    onTeamSelect(e) {
      console.log(1)
      console.log(e)
      console.log(this.selectedTeamId)
      this.selectedMemberId = ''
      this.loadTeamMember()
    },

    onMemberSelect() {
      console.log(this.selectedMemberId)
    }
  },
  created() {
    this.loadAllData()
  }
}
</script>

<style scoped>

</style>
