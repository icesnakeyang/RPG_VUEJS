<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>{{$t('navigator.myTask')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{minHeight: '400px'}">
      <Card class="card" v-for="item in tasks" :key="item.taskId">
        <p slot="title"><a @click="goTask(item.taskId)">{{item.title}}</a></p>
        <p>{{$t("task.code")}}: {{item.code}}</p>
        <p>{{$t("task.days")}}: {{item.days}}</p>
        <p>{{$t("task.price")}}: {{item.price}}</p>
      </Card>
    </Content>
  </div>
</template>

<script>
    import {apiListMyTask} from "../../api/api";

    export default {
        name: "taskPage",
        data() {
            return {
                pageIndex:1,
                pageSize:10,
                tasks: []
            }
        },
        methods: {
            loadAllData() {
                apiListMyTask({
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.tasks = response.data.data.tasks;
                    } else {
                        this.$Message.error(this.$t("syserr." + response.data.errorCode));
                    }
                }).catch((error)=>{
                })
            },

            goTask(id) {
                this.$store.dispatch('saveTaskId', id)
                this.$router.push({
                    name: 'taskDetail',
                    params: {
                        taskId: id
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
  .card {
    margin: 20px;
  }

</style>
