<template>
  <div>
    <Button type="info" @click="onCreateJobComplete" class="card">Create</Button>
    <CompleteRow v-for="row in jobCompleteList"
               v-bind:key="row.jobCompleteId"
               v-bind:complete="row"
    ></CompleteRow>
  </div>
</template>

<script>
  import {loadCompletList} from "../../../../api/api";
  import {setCompleteReadTime} from "../../../../api/api";
  import CompleteRow from "./completeRow"

  export default {
    name: "completePage",
    components:{
      CompleteRow
    },
    data() {
      return {
        jobCompleteList: []
      }
    },
    methods: {
      loadData() {
        loadCompletList({
          jobId: this.$store.state.jobId,
          pageIndex: 0,
          pageSize: 100
        }).then((response) => {
          if (response.data.errorCode === 0) {
            this.jobCompleteList = response.data.data.content
            this.setReadTime()
          }
        })
      },
      setReadTime() {
        setCompleteReadTime({
          jobId: this.$store.state.jobId
        }).then((response) => {
        })
      },
      onCreateJobComplete(){
        this.$router.push({
          name:'createComplete',
          params:{
            jobId:this.$store.state.jobId
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
