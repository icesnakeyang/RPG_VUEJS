<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{ $t('navigator.myProfile') }}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Card class="card">
        <p slot="title">
          {{ $t('user.email.title') }}
        </p>
        <EmailRow v-for="(item, index) in emailList"
                  :key="index"
                  :email="item"></EmailRow>
      </Card>
      <Card class="card">
        <p slot="title">
          {{ $t('user.phone.phone') }}
        </p>
        <PhoneRow v-for="(item, index) in phoneList"
                  :key="index"
                  :phone="item"></PhoneRow>
      </Card>
      <Card class="card">
        <p slot="title">
          {{ $t('user.realname.title') }}
        </p>
        <RealnameRow :theData="realname" />
      </Card>
    </Content>
  </div>
</template>

<script>
import {apiGetUserProfile} from "../../../api/api";
import {apiListEmailOfUser} from "../../../api/api";
import {apiListPhoneOfUser} from "../../../api/api";
import PhoneRow from './phoneRow'
import EmailRow from './emailRow'
import RealnameRow from './realnameRow'

export default {
  name: "profileDashboard",
  components: {
    PhoneRow,
    EmailRow,
    RealnameRow
  },
  data() {
    return {
      realname: {},
      phoneList: [],
      emailList: []
    }
  },

  methods: {
    loadAllData() {
      apiGetUserProfile({}).then((response) => {
        console.log(response)
        if (response.data.errorCode === 0) {
          this.realname = response.data.data.realname
        } else {
          this.$Message.error(this.$t('syserr.' + response.data.errorCode))
        }
      })

      apiListPhoneOfUser({}).then((response) => {
        if (response.data.errorCode === 0) {
          this.phoneList = response.data.data.phones
          console.log(this.phoneList)
        } else {
          this.$Message.error(this.$t('syserr.' + response.data.errorCode))
        }
      })

      apiListEmailOfUser({}).then((response) => {
        if (response.data.errorCode === 0) {
          this.emailList = response.data.data.emails
        } else {
          this.$Message.error(this.$t('syserr.' + response.data.errorCode))
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

.card {
  margin: 20px;
}

.title_row {
  padding-left: 20px;
}
</style>
