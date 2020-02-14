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
                console.log(this.amount)
                console.log(this.remark)
            }
        }
    }
</script>

<style scoped>

</style>
