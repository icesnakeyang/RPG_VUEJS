<template>
  <div>
    <Breadcrumb :style="{margin:'24px 0'}">
      <BreadcrumbItem to="taskPage">{{$t('navigator.myTask')}}</BreadcrumbItem>
      <BreadcrumbItem v-for="(item, index) in pList" :key="index">
        <a @click="onBreakTask(item.taskId)">{{item.title}}</a>
      </BreadcrumbItem>
      <BreadcrumbItem>{{$t('navigator.subTaskPage')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{minHeight: '450px'}">
      <Form :label-width="80">
        <FormItem>
          <Input type="text" v-model="taskTitle" placeholder="Enter something..."></Input>
          <Button type="primary" long @click="addTask" icon="md-add">{{$t('task.addSubTaskTitle')}}</Button>
        </FormItem>
      </Form>

      <Card>
        <p slot="title">{{$t('task.subTask')}}</p>
        <Tree :data="data5" @on-select-change="onSubTask"></Tree>
      </Card>
    </Content>
  </div>
</template>

<script>
    import {apiGetTaskTinyByTaskId} from "../../api/api";
    import {apiListSubTask} from "../../api/api";
    import {apiCreateSubTask} from "../../api/api";
    import {apiListTaskBreadcrumb} from "../../api/api";

    export default {
        name: "subTaskPage",
        data() {
            return {
                pTask: {},
                tasks: [],
                taskTitle: '',
                pList: [],
                data5:[
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: '开发rpg任务——10 已发布',
                                expand: true,
                                render:(h, {root, node, data})=>{
                                  return h('span', {
                                      style:{
                                          display:'inline-block',
                                          width:'100%'
                                      }
                                  }, [
                                      h('span', [
                                          h('Icon', {
                                              props:{
                                                  type:'ios-folder-outline'
                                              },
                                              style:{
                                                  marginRight:'8px'
                                              }
                                          }),
                                          h('span', data.title)
                                      ])
                                  ])
                                },
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        expand: true
                                    }
                                ]
                            },
                            {
                                title: 'child 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            loadAllData() {
                apiGetTaskTinyByTaskId({
                    taskId: this.$store.state.taskId
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.pTask = response.data.data.task
                    } else {
                        this.$Message.error(this.$t("syserr." + response.data.errorCode))
                    }
                })
                apiListSubTask({
                    pid: this.$store.state.taskId
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.tasks = response.data.data.tasks
                    } else {
                        this.$Message.error(this.$t("syserr." + response.data.errorCode))
                    }
                })

                apiListTaskBreadcrumb({
                    taskId: this.$store.state.taskId
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.pList = response.data.data.breadList
                    } else {
                        this.$Message.eror(this.$t("syserr." + response.data.errorCode))
                    }
                })
            },
            addTask() {
                if (!this.taskTitle) {
                    this.$Message.error(this.$t('task.tipSubTask1'))
                    return
                }
                apiCreateSubTask({
                    pid: this.$store.state.taskId,
                    title: this.taskTitle,
                    code: this.pTask.code
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        // this.loadSubTaskList()
                        this.loadAllData()
                    } else {
                        this.$Message.error(this.$t("syserr." + response.data.errorCode))
                    }
                })
            },
            loadSubTaskList() {
                apiListSubTask({
                    pid: this.$store.state.taskId
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.tasks = response.data.data.task
                    } else {
                        this.$Message.error(this.$t("syserr." + response.data.errorCode))
                    }
                })
            },
            onTask(row) {

                this.$store.dispatch('saveTaskId', row.taskId)
                this.$router.push({
                    name: 'taskDetail',
                    params: {
                        taskId: row.taskId
                    }
                })
            },
            onBreakTask(data) {
                this.$router.push({
                    name: 'taskDetail',
                    params: {
                        taskId: data
                    }
                })
            },

            onSubTask(e) {
                const taskId = e[0].taskId
                this.$router.push({
                    name: 'taskDetail',
                    params: {
                        taskId
                    }
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
