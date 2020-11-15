<template>
  <div>
    <Card>
      <p slot="title">{{ userName }}</p>
      <Button type="primary" @click="onAddToMyTeam">{{ $t('team.addToMyTeam') }}</Button>
    </Card>
  </div>
</template>

<script>
    import {apiAddTeamMember} from "../../api/api";

    export default {
        name: "memberRow",
        props: ['data'],
        computed: {
            userName() {
                return this.data.realName
            }
        },
        methods: {
            onAddToMyTeam() {
                let params = {
                    userId: this.data.userId,
                    teamId: this.$store.state.teamId
                }
                console.log(params)
                console.log(this.$store.state)
                apiAddTeamMember(params).then((response) => {
                    console.log(response)
                    if (response.data.errorCode === 0) {
                        this.$Message.success(this.$t('team.tip2'))
                        this.$router.push({
                            name: 'teamProfile'
                        })
                    } else {
                        this.$Message.error(this.$t('syserr.' + response.data.errorCode))
                    }
                }).catch(() => {
                    this.$Message.error(this.$t('syserr.30000'))
                })
            }
        },
        mounted() {
            console.log(this.data.realName)
        }
    }
</script>

<style scoped>

</style>
