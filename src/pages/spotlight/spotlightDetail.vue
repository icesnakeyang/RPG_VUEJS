<template>
  <div>
    <Card>
      <p slot="title">
        {{spotlight.title}}
      </p>
      <quill-editor v-model="spotlight.content" :options="options"></quill-editor>
    </Card>
  </div>
</template>

<script>
  import {apiSpotlightDetail} from "../../api/api";
  import {quillEditor} from 'vue-quill-editor'

  export default {
    name: "spotlightDetail",
    components: {
      quillEditor
    },
    data() {
      return {
        spotlight: {},
        options: {
          modules: {
            toolbar: false
          }
        }
      }
    },
    methods: {
      loadAllData() {
        console.log(this.$store.state.spotId)
        apiSpotlightDetail(this.$store.state.spotId).then((response) => {
          console.log(response)
          if (response.data.errorCode === 0) {
            this.spotlight = response.data.data.spot
          } else {
            this.$Message.error(this.$t('syserr.' + response.data.errorCode))
          }
        })
      }
    },
    mounted() {
      if (this.$route.params.spotId) {
        this.$store.dispatch('saveSpotId', this.$route.params.spotId)
      }
      this.loadAllData()
    }
  }
</script>

<style scoped>

</style>
