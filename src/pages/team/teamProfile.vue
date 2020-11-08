<template>
  <div>
    <Card>
      <p slot="title">
        {{ team.teamName }}
      </p>
      <p v-if="ACTIVE">
        <Tag color="primary">{{ $t('common.status.ACTIVE') }}</Tag>
      </p>
      <quill-editor v-model="team.description"
                    :options="options">
      </quill-editor>
    </Card>
    <Card>
      <Button type="primary" @click="onAddMember">{{$t('team.btAddMember')}}</Button>
    </Card>
  </div>
</template>

<script>
import {apiGetTeamDetail} from "../../api/api";
import {quillEditor} from 'vue-quill-editor'

export default {
  name: "teamProfile",
  components: {
    quillEditor
  },
  data() {
    return {
      team: {},
      options: {
        modules: {
          toolbar: false
        },
        readOnly: true
      }
    }
  },
  computed: {
    ACTIVE() {
      if (this.team.status === 'ACTIVE') {
        return true
      }
      return false
    }
  },
  methods: {
    loadAllData() {
      const params = {
        teamId: this.$store.state.teamId
      }
      apiGetTeamDetail(params).then((response) => {
        if (response.data.errorCode === 0) {
          this.team = response.data.data.team
        } else {
          this.$Message.error(this.$t('syserr.' + response.data.errorCode))
        }
      }).catch(() => {
        this.$Message.error(this.$t('syserr.30000'))
      })
    },
    onAddMember() {
      this.$router.push({
        name: 'teamAddMember'
      })
    }
  },
  mounted() {
    if (this.$route.params.teamId) {
      this.$store.dispatch('saveTeamId', this.$route.params.teamId)
    }
    this.loadAllData()
  }
}
</script>

<style scoped>

</style>
