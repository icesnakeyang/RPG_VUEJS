<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem to="profileDashboard">{{$t('navigator.myProfile')}}</BreadcrumbItem>
      <BreadcrumbItem>{{$t('navigator.submitUserProfile')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Form :label-width="80">
        <FormItem :label="this.$t('user.realname.realName')">
          <Input v-model="realName" :placeholder="$t('user.realname.realnameHolder')"></Input>
        </FormItem>
        <FormItem :label="this.$t('user.realname.idCardNo')">
          <Input v-model="idcardNo" :placeholder="$t('user.realname.idcardHolder')"></Input>
        </FormItem>

        <FormItem>
          <Button type="primary" @click="onSubmit">{{$t('user.realname.btSubmit')}}</Button>
        </FormItem>
      </Form>
    </Content>
  </div>
</template>

<script>
    import {apiGetUserProfile} from "../../../api/api";
    import {apiSaveRealName} from "../../../api/api";

    export default {
        name: "submitUserProfile",
        data() {
            return {
                realName: '',
                idcardNo:''
            }
        },
        methods: {
            loadAllData() {
                apiGetUserProfile({}).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.realName = response.data.data.realname.realName
                        this.idcardNo=response.data.data.realname.idcardNo
                    } else {
                        this.$Message.error(this.$t('syserr.' + response.data.errorCode))
                    }
                })
            },

            onSubmit() {
                apiSaveRealName({
                    realName: this.realName,
                    idcardNo: this.idcardNo
                }).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.$store.dispatch('saveRealName', this.realName.realName)
                        this.$Message.success(this.$t('user.realname.tipSaveSuccess'))
                    } else {
                        this.$Message.error(this.$t('user.realname.tipSaveError'))
                    }
                })
            }
        },
        mounted() {
            this.loadAllData()
        }
    }
</script>

<style scoped>
  @import "../../../assets/gogoStyles.css";
</style>
