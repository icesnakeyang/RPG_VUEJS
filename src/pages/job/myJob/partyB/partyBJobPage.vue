<template>
  <div>
    <JobPartyBListTpl v-for="job in jobList"
                      v-bind:key="job.jobId"
                      v-bind:job="job"
    ></JobPartyBListTpl>
  </div>
</template>

<script>
  import JobPartyBListTpl from "../../components/jobPartyBListTpl"
  import {loadMyPartyBJob} from "../../../../api/api";

  export default {
    name: "partyBJobPage",
    components:{
      JobPartyBListTpl
    },
    data() {
      return {
        jobList: []
      }
    },
    methods: {
      loadData() {
        loadMyPartyBJob({}).then((response) => {
          console.log(response)
          if (response.data.errorCode === 0) {
            this.jobList = response.data.data.content
          }
        })
      }
    },
    mounted() {
      this.loadData()
    }
  }
</script>

<style scoped>

</style>
