<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>{{$t('navigator.createTask')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{minHeight: '400px'}">
      <Form :model="task" :label-width="0">
        <FormItem v-show="errInput">
          <Alert type="error" show-icon>{{errMsg}}</Alert>
        </FormItem>
        <FormItem :label="$t('task.title')">
          <Input v-model="task.title"/>
        </FormItem>
        <FormItem :label="$t('task.code')">
          <Input v-model="task.code"/>
        </FormItem>
        <div>{{$t('task.detail')}}</div>
        <FormItem>
          <quill-editor v-model="task.detail"
                        :options="editorOption"></quill-editor>
        </FormItem>
        <FormItem :label="$t('task.price')">
          <Input v-model="task.price"/>
        </FormItem>
        <FormItem :label="$t('task.days')">
          <Input v-model="task.days"/>
        </FormItem>
        <FormItem v-show="!saving">
          <Button type="primary" @click="create">{{$t("task.btCreate")}}</Button>
        </FormItem>
        <FormItem v-show="saving">
          <template>
            <Spin size="large"></Spin>
          </template>
        </FormItem>
      </Form>
    </Content>
  </div>
</template>

<script>
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import {quillEditor} from 'vue-quill-editor'
    import {ImageResize} from 'quill-image-resize-module'

    import {apiCreateTask} from "../../api/api";

    export default {
        name: "taskCreateNew",
        components: {
            quillEditor
        },
        data() {
            return {
                task: {},
                errInput: false,
                errMsg: '',
                saving: false,
                editorOption: {
                    modules: {
                        imageResize: true
                    }
                }
            }
        },
        methods: {
            create() {
                if(!this.task){
                    this.$Message.error(this.$t('task.errTitle'))
                    return;
                }
                if (!this.task.title) {
                    this.$Message.error(this.$t('task.errTitle'))
                    return;
                }
                this.saving = true;
                apiCreateTask({
                    title: this.task.title,
                    detail: this.task.detail,
                    days: this.task.days,
                    code: this.task.code,
                    price: this.task.price
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.$router.push({name: 'taskPage'})
                    } else {
                        this.errInput = true;
                        this.errMsg = this.$t("syserr."+response.data.errorCode)
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
