<template>
  <Card class="card">
    <p slot="title">
      <a @click="onSpotlightDetail(spot.spotId)">
        {{spot.title}}
      </a>
    </p>
    <p>{{$t('spot.spotlight.createdTime')}}: {{spotCreateTime}}</p>
  </Card>
</template>

<script>
  import {rpgFormat} from "../../../../common/rpgfun";

  export default {
    name: "mySpotPageRow",
    props: {
      spot: {}
    },
    computed: {
      spotCreateTime() {
        return rpgFormat.formatTime(this.spot.createdTime)
      }
    },
    methods: {
      onSpotlightDetail(spotId) {
        this.$router.push({
          name: 'spotlightDetail',
          params: {
            spotId: spotId
          }
        })
      }
    }
  }
</script>

<style scoped>
  .card {
    margin: 20px;
  }
</style>
