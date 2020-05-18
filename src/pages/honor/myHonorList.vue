<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.myHonorLedger')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Card>
        <p slot="title">我的荣誉记录</p>
        <Table border :columns="columns5" :data="honorList"></Table>
        <Page style="margin-top: 20px" :total="totalHonors"/>
      </Card>
    </Content>
  </div>
</template>

<script>
    import {apiListMyHonor} from "../../api/api";
    import MyHonorRow from "./myHonorRow"
    import {rpgFunc} from "../../common/rpgfun";

    export default {
        name: "myHonorList",
        components: {
            MyHonorRow
        },
        data() {
            return {
                pageIndex: 1,
                pageSize: 20,
                honorList: [],
                columns5: [
                    {
                        title: this.$t("user.honor.createdTime"),
                        key: 'cratedTime',
                        render: (h, params) => {
                            return h('div', rpgFunc.formatTime(params.row.createdTime))
                        }
                    },
                    {
                        title: this.$t('user.honor.honorType'),
                        key: 'type',
                        render: (h, params) => {
                            return h('div', this.$t('user.honor.'+params.row.type))
                        },
                        sortable: true
                    },
                    {
                        title: this.$t("user.honor.honorPoint"),
                        key: 'point',
                        sortable: true
                    },
                    {
                        title: this.$t("user.honor.jobTitle"),
                        key: 'jobTitle'
                    }
                ],
                totalHonors: 0
            }
        },
        methods: {
            loadAllData() {
                apiListMyHonor({
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize
                }).then((response) => {
                    console.log(response)
                    if (response.data.errorCode === 0) {
                        this.honorList = response.data.data.honors
                        this.totalHonors = response.data.data.totalHonors
                    } else {
                        this.$Message.error(this.$t('syserr.' + response.data.errorCode))
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
  @import "../../assets/gogoStyles.css";
</style>
