<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.myAccount')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <Row>
        <Col :xs="24" :sm="12" :md="12" :lg="4">
          <Card style="margin: 10px;">
            <p slot="title" class="title_text">{{$t('account.myBalance')}}</p>
            <Form>
              <FormItem>
                <div class="label_text">{{$t('account.withdrawBalance')}}</div>
                <div class="money_text">{{balance}}</div>
              </FormItem>
              <FormItem>
                <div class="label_text">{{$t('account.noneWithdrawBalance')}}</div>
                <div class="money_none_text">0.00</div>
              </FormItem>
              <FormItem>
                <Button type="primary" @click="btWithdraw">{{$t('account.withdraw')}}</Button>
              </FormItem>
            </Form>
          </Card>
        </Col>
        <Col :xs="24" :sm="12" :md="12" :lg="20">
          <Card style="margin: 10px">
            <Row>
              <Col :xs="24" :sm="24" :md="12" :lg="12">
                <div style="background: rgb(219,78,43); width: 36%;">
                  <i class="icon ivu-icon ivu-icon-md-trending-up"
                     style="font-size: 36px; color: rgb(255, 255, 255);"></i>
                </div>
                <div class="right-area" style="width: 64%;">
                  <div>
                    <div class="count-to-wrapper">
                      <p class="content-outer">
                        <span id="count_to_325" class="count-to-count-text count-style">{{income}}</span>
                        <i class="count-to-unit-text"></i>
                      </p>
                    </div>
                    <p>{{$t('user.account.income')}}</p>
                  </div>
                </div>
              </Col>
              <Col :xs="24" :sm="24" :md="12" :lg="12">
                <div class="left-area" style="background: rgb(89,187,115); width: 36%;">
                  <i class="icon ivu-icon ivu-icon-md-trending-down"
                     style="font-size: 36px; color: rgb(255, 255, 255);"></i>
                </div>
                <div class="right-area" style="width: 64%;">
                  <div>
                    <div class="count-to-wrapper"><p class="content-outer"><span id="count_to_331"
                                                                                 class="count-to-count-text count-style">{{outgoing}}</span><i
                      class="count-to-unit-text"></i></p></div>
                    <p>{{$t('user.account.outgoing')}}</p></div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Content>
  </div>
</template>

<script>
    import {apiLoadAccountBalance} from "../../api/api";

    export default {
        name: "myAccountDashboard",
        data() {
            return {
                income: 0,
                outgoing: 0,
                balance: 0
            }
        },
        methods: {
            loadAllData() {
                apiLoadAccountBalance({}).then((response) => {
                    console.log(response)
                    if (response.data.errorCode === 0) {
                        this.income = response.data.data.accountIn
                        this.outgoing = response.data.data.accountOut
                        this.balance = response.data.data.accountBalance
                    } else {
                        this.$Message.error(this.$t('syserr.' + response.data.errorCode))
                    }
                })
            },
            btWithdraw() {
                this.$router.push({
                    name: 'withdrawApply'
                })
            }
        },
        mounted() {
            this.loadAllData()
        }
    }
</script>

<style scoped>
  @import '../../assets/gogoStyles.css';

  .title_text {
    font-size: 18px;
    color: #353535;
  }

  .label_text {
    font-size: 14px;
    color: #9ca3b4;
  }

  .money_text {
    font-size: 14px;
    color: #009a14;
  }

  .money_none_text {
    font-size: 14px;
    color: #ea6963;
  }
</style>
