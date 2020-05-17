<template>
    <div>
      <Card>
        <p slot="title">
          {{job.title}}
        </p>
        <p>{{$t('task.code')}}: {{job.code}}</p>
        <p>{{$t('job.partyAName')}}: {{job.partyAName}}</p>
        <p>{{$t('job.partyBName')}}: {{job.partyBName}}</p>
        <p>{{$t('job.contractTime')}}: {{contractTime}}</p>
        <p>{{$t('task.price')}}: {{job.price}}</p>
        <p>{{$t('task.days')}}: {{job.days}}</p>
        <p>{{$t('job.jobComplete.acceptTime')}}: {{acceptTime}}</p>
      </Card>
    </div>
</template>

<script>

  import {rpgFunc} from "../../../../common/rpgfun";

  export default {
        name: "jobRow",
      props:{
          job:{}
      },
      computed:{
        contractTime(){
          return rpgFunc.formatTime(this.job.contractTime)
        },
        acceptTime(){
          return rpgFunc.formatTime(this.job.acceptedTime)
        }
      }
    }
</script>

<style scoped>

</style>
