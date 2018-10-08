<template>
  <div>
    <Card class="card">
      <p slot="title">
        {{$t("secretary.topUp.topUpAmount")}}：300
      </p>
      <p>{{$t("secretary.topUp.topUpUser")}}：马云</p>
      <p>{{$t("secretary.topUp.topUpTime")}}：2018-8-8 12:32</p>
      <p>{{$t("secretary.topUp.topUpRemark")}}：农行卡，20098702830482，尾数是23</p>
      <Divider></Divider>
      <div>
        <Button type="primary" @click="onAccept">{{$t("secretary.topUp.accept")}}</Button>
        <Button type="error" @click="onReject">{{$t("secretary.topUp.reject")}}</Button>
      </div>
    </Card>
  </div>
</template>

<script>
  export default {
    name: "topupPage",
    methods: {
      onAccept() {
        console.log('accept')
        this.$Modal.confirm({
          title: 'Title',
          content: '<p>Content of dialog</p><p>Content of dialog</p>',
          onOk: () => {
            this.$Message.info('Clicked ok');
          },
          onCancel: () => {
            this.$Message.info('Clicked cancel');
          }
        });
      },
      onReject() {
        console.log('reject')
        this.$Modal.confirm({
          title: 'title',
          content: "lskdjflsdkjf",
          onOk: () => {
            this.$Message.info('ok')
          },
          onCancel: () => {
            this.$Message.info('cancel')
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
