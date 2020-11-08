<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{ $t('navigator.partyB') }}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Card>
        <Tag checkable color="primary" @on-change="onProgressStatus">{{ $t('common.status.PROGRESS') }}</Tag>
        <Tag checkable color="success" @on-change="onCompleteStatus">{{ $t('common.status.COMPLETE') }}</Tag>
      </Card>
      <div v-if="isLoading" class="demo-spin-col">
        <Spin size="large"></Spin>
      </div>
      <div v-else="isLoading">
        <div style="margin-top: 20px">
          <Table border :columns="col1" :data="jobList"></Table>
          <div style="margin-top: 20px">
            <Page
              :total="totalJobs"
              :current="pageIndex"
              show-total
              @on-change="onJobPage"/>
          </div>
        </div>
      </div>
    </Content>
  </div>
</template>

<script>
import JobPartyBListTpl from "./jobPartyBListTpl"
import {apiListMyPartyBJob} from "../../../../api/api";
import moment from "moment";

export default {
  name: "partyBJobPage",
  components: {
    JobPartyBListTpl
  },
  data() {
    return {
      pageIndex: 1,
      pageSize: 10,
      jobList: [],
      totalJobs: 0,
      jobStatus: [
        'PROGRESS',
        'COMPLETE'
      ],
      isLoading: true,
      col1: [
        {
          title: this.$t('task.title'),
          key: 'title',
          sortable: false
        },
        {
          title: this.$t('task.price'),
          key: 'price',
          sortable: false
        },
        {
          title: this.$t('job.partyAName'),
          key: 'partyAName',
          sortable: false
        },
        {
          title: this.$t('job.contractTime'),
          key: 'contractTime',
          render: (h, params) => {
            return h('div', [
              h('span', moment(params.row.contractTime).format('YYYY-MM-DD HH:mm'))
            ]);
          }
        },
        {
          title: this.$t("common.action"),
          key: 'action',
          width: 80,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.$store.dispatch('saveJobId', params.row.jobId);
                    this.$router.push({
                      name: 'partyBJobDetail',
                      params: {
                        jobId: params.row.jobId
                      }
                    })
                    // this.confirmMatch(params.row.userId, this.jobId)
                  }
                }
              }, this.$t("task.detail"))
            ]);
          }
        }
      ]
    }
  },
  methods: {
    loadAllData() {
      this.isLoading = true
      apiListMyPartyBJob({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        statusList: this.jobStatus
      }).then((response) => {
        if (response.data.errorCode === 0) {
          this.jobList = response.data.data.jobList
          this.totalJobs = response.data.data.totalJobs
        } else {
          this.$Message.error(this.$t('syserr.' + response.data.errorCode))
        }
        this.isLoading = false
      }).catch(() => {
        this.$Message.error(this.$t('syserr.30000'))
        this.isLoading = false
      })
    },
    onJobPage(e) {
      this.pageIndex = e
      this.loadAllData()
    },

    onCompleteStatus(e) {
      if (e) {
        this.jobStatus.push('COMPLETE')
      } else {
        let index = this.jobStatus.indexOf('COMPLETE')
        this.jobStatus.splice(index, 1)
      }
      this.loadAllData()
    },

    onProgressStatus(e) {
      if (e) {
        this.jobStatus.push('PROGRESS')
      } else {
        let index = this.jobStatus.indexOf('PROGRESS')
        this.jobStatus.splice(index, 1)
      }
      this.loadAllData()
    }
  },
  mounted() {
    this.loadAllData()
  }
}
</script>

<style scoped>
@import "../../../../assets/gogoStyles.css";
</style>
