<template>
  <div>
    <Form :model="spotlight" :label-width="200">
      <FormItem v-show="errInput">
        <Alert type="error" show-icon>{{errMsg}}</Alert>
      </FormItem>
      <FormItem :label="$t('spot.spotlight.title')">
        <Input type="text" v-model="spotlight.title"></Input>
      </FormItem>
      <FormItem :label="$t('spot.spotlight.content')">
        <quill-editor v-model="spotlight.content"></quill-editor>
      </FormItem>

      <FormItem v-show="!saving">
        <Button type="primary" @click="onCreateSpotlight">{{$t("spot.spotlight.btCreate")}}</Button>
      </FormItem>
      <FormItem v-show="saving">
        <template>
          <!--<Spin size="small"></Spin>-->
          <!--<Spin></Spin>-->
          <Spin size="large"></Spin>
        </template>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import {quillEditor} from "vue-quill-editor"
  import {apiCreateSpotlight} from "../../../../api/api";

  export default {
    name: "createSpotlight",
    components: {
      quillEditor
    },
    data() {
      return {
        spotlight: {},
        errInput: false,
        errMsg: '',
        saving: false
      }
    },
    methods: {
      onCreateSpotlight() {
        console.log(this.$store.state.jobId)
        console.log(this.spotlight)
        this.$Modal.confirm({
          title: this.$t('common.tipTitleQuestion'),
          content: this.$t('spot.spotlight.tipCreateConfirm'),
          onOk: () => {
            apiCreateSpotlight({
              jobId: this.$store.state.jobId,
              title: this.spotlight.title,
              content:this.spotlight.content
            }).then((response) => {
              if (response.data.errorCode === 0) {
                this.$Message.success(this.$t('spot.spotlight.tipCreateSuccess'))
              } else {
                this.$Message.error(this.$t('syserr.' + response.data.errorCode))
              }
            })
          },
          onCancel: () => {
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
