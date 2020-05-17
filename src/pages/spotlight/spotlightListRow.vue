<template>
  <div>
    <Card>
      <p slot="title">
        <a @click="onSpotDetail(spotlight.spotId)">
          {{spotlight.title}}
        </a>
      </p>
      <p>{{$t('spot.spotlight.createdUserName')}}: {{spotlight.createdUserName}}</p>
      <p>{{$t('spot.spotlight.createdTime')}}: {{createdTime}}</p>
    </Card>
  </div>
</template>

<script>

  import {rpgFunc} from "../../common/rpgfun";

  export default {
    name: "spotlightListRow",
    props: {
      spotlight: {}
    },
    computed: {
      createdTime() {
        return rpgFunc.formatTime(this.spotlight.createdTime)
      }
    },
    methods: {
      onSpotDetail(spotId) {
        this.$router.push({
          name:'spotlightDetail',
          params:{
            spotId:spotId
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
