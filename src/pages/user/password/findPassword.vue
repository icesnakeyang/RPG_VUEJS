<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.findPassword')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <div :style="{width:'500px'}">
        <Form :label-width="200">
          <FormItem :label="$t('user.phone.phone2')">
            <Input v-model="phone" :placeholder="$t('user.phone.tipFindPasswordPhone')"></Input>
          </FormItem>
          <FormItem :label="$t('user.phone.verifyCode')">
            <Input v-model="code">
              <span v-if="wait" slot="append">{{$t('user.phone.waiting')}}</span>
              <span v-else="wait" slot="append"><a @click="btSendSms">{{$t('user.phone.sendVerifyCode')}}</a></span>
            </Input>
          </FormItem>
          <FormItem :label="$t('user.phone.newPassword')">
            <Input v-model="newPassword" :placeholder="$t('user.phone.tipNewPassword')"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="btSubmit">{{$t('common.submit')}}</Button>
          </FormItem>
        </Form>
      </div>
    </Content>
  </div>
</template>

<script>
  export default {
    name: "findPassword",
    data() {
      return {
        phone: '',
        code: '',
        wait: false,
        newPassword: ''
      }
    },
    methods: {
      btSendSms() {
        this.wait = true
      },
      btSubmit(){
        console.log(this.phone)
        console.log(this.code)
        console.log(this.newPassword)
      }
    }
  }
</script>

<style scoped>
  @import "../../../assets/gogoStyles.css";
</style>
