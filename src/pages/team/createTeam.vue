<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>{{ $t('navigator.createTeam') }}</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{minHeight: '400px'}">
      <Card>
        <Form :label-width="80">
          <FormItem v-show="errInput">
            <Alert type="error" show-icon>{{ errMsg }}</Alert>
          </FormItem>
          <FormItem :label="$t('team.teamName')">
            <Input v-model="teamName"/>
          </FormItem>
          <div>{{ $t('team.description') }}</div>
          <FormItem>
            <quill-editor v-model="description"
                          :options="editorOption"></quill-editor>
          </FormItem>
          <FormItem v-show="!saving">
            <Button type="primary" @click="onCreateTeam">{{ $t("team.btCreate") }}</Button>
          </FormItem>
          <FormItem v-show="saving">
            <template>
              <Spin size="large"></Spin>
            </template>
          </FormItem>
        </Form>
      </Card>
    </Content>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {quillEditor} from 'vue-quill-editor'
import {ImageResize} from 'quill-image-resize-module'
import {apiCreateTask, apiCreateTeam} from "../../api/api";

export default {
  name: "createTeam",
  components: {
    quillEditor
  },
  data() {
    return {
      description: '',
      teamName: '',
      errInput: false,
      errMsg: '',
      editorOption: {
        modules: {
          imageResize: true
        }
      },
      saving: false
    }
  },
  methods: {
    onCreateTeam() {
      console.log(this.teamName)
      if (!this.teamName) {
        this.$Message.error(this.$t('team.errName'))
        return;
      }
      if (!this.description) {
        this.$Message.error(this.$t('team.errDescription'))
        return;
      }
      this.saving = true;
      const params = {
        teamName: this.teamName,
        description: this.description
      }
      apiCreateTeam(params).then((response) => {
        if (response.data.errorCode === 0) {
          this.$Message.success(this.$t('team.tip1'))
          this.$router.push({name: 'teamProfile'})
        } else {
          this.errInput = true;
          this.errMsg = this.$t("syserr." + response.data.errorCode)
          this.saving = false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
