<template>
  <div>
    <Card>
      <p slot="title">
        <a @click="onTeamProfile()">
          {{ data.teamName }}</a>
      </p>
      <div>
        <quill-editor v-model="data.description"
                      :options="options">
        </quill-editor>
      </div>
    </Card>
  </div>
</template>

<script>
import {quillEditor} from 'vue-quill-editor'

export default {
  name: "teamListRow",
  components: {
    quillEditor
  },
  data() {
    return {
      options: {
        modules: {
          toolbar: false
        },
        readOnly: true
      },
    }
  },
  props: [
    'data'
  ],

  methods: {
    onTeamProfile() {
      this.$router.push({
        name: 'teamProfile',
        params: {
          teamId: this.data.teamId
        }
      })
    }
  },

  mounted() {
  }
}
</script>

<style scoped>

</style>
