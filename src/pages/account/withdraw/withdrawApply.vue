<template>
  <div>
    <Card style="margin-top: 20px">
      <Form>
        <FormItem :label="$t('account.amount')">
          <div>
            <InputNumber v-model="amount"></InputNumber>
          </div>
        </FormItem>

        <FormItem :label="$t('account.remark')">
          <Input type="text" v-model="remark"></Input>
        </FormItem>

        <FormItem>
          <Button type="primary" @click="btSubmit">{{$t('common.submit')}}</Button>
        </FormItem>
      </Form>
      <Alert show-icon>
        {{$t('account.tip1')}}
        <template slot="desc">
          {{$t('account.tip2')}}
          <p></p>
          {{$t('account.tip3')}}
          <p></p>
          {{$t('account.tip4')}}
        </template>
      </Alert>
    </Card>
  </div>
</template>

<script>
  import {apiWithdraw} from "../../../api/api";

  export default {
    name: "withdrawApply",
    data() {
      return {
        amount: 0,
        remark: ''
      }
    },
    methods: {
      btSubmit() {
        let params = {
          amount: this.amount,
          remark: this.remark
        }

        apiWithdraw(params).then((response) => {
          if (response.data.errorCode === 0) {
            this.$Message.success(this.$t('account.tipSubmitSuccess'))
          } else {
            this.$Message.error(this.$t('syserr.' + response.data.errorCode))
          }
        }).catch((error) => {
          this.$Message.error(this.$t('account.tipSubmitFail'))
        })
      }
    }
  }
</script>

<style scoped>

</style>
