<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.myHonor')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <div>
        <div class="ivu-row" style="margin-left: -10px; margin-right: -10px;">
          <div class="ivu-col ivu-col-span-xs-12 ivu-col-span-md-8 ivu-col-span-lg-4"
               style="height: 120px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px;">
            <div class="info-card-wrapper ivu-card ivu-card-dis-hover ivu-card-shadow"><!----> <!---->
              <div class="ivu-card-body" style="padding: 0px;">
                <div class="content-con">
                  <div class="left-area" style="background: rgb(45, 140, 240); width: 36%;">
                    <i class="icon ivu-icon ivu-icon-ios-ribbon"
                       style="font-size: 36px; color: rgb(255, 255, 255);"></i>
                  </div>
                  <div class="right-area" style="width: 64%;">
                    <div>
                      <div class="count-to-wrapper">
                        <p class="content-outer">
                        <span id="count_to_319"
                              class="count-to-count-text count-style">
                          {{honorBalance}}
                        </span>
                          <i class="count-to-unit-text"></i>
                        </p>
                      </div>
                      <p>{{$t('user.honor.balance')}}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ivu-col ivu-col-span-xs-12 ivu-col-span-md-8 ivu-col-span-lg-4"
               style="height: 120px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px;">
            <div class="info-card-wrapper ivu-card ivu-card-dis-hover ivu-card-shadow"><!----> <!---->
              <div class="ivu-card-body" style="padding: 0px;">
                <div class="content-con">
                  <div class="left-area" style="background: rgb(219,78,43); width: 36%;">
                    <i class="icon ivu-icon ivu-icon-md-trending-up"
                       style="font-size: 36px; color: rgb(255, 255, 255);"></i></div>
                  <div class="right-area" style="width: 64%;">
                    <div>
                      <div class="count-to-wrapper"><p class="content-outer"><span id="count_to_325"
                                                                                   class="count-to-count-text count-style">{{honorIn}}</span><i
                        class="count-to-unit-text"></i></p></div>
                      <p>{{$t('user.honor.balanceIn')}}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ivu-col ivu-col-span-xs-12 ivu-col-span-md-8 ivu-col-span-lg-4"
               style="height: 120px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px;">
            <div class="info-card-wrapper ivu-card ivu-card-dis-hover ivu-card-shadow"><!----> <!---->
              <div class="ivu-card-body" style="padding: 0px;">
                <div class="content-con">
                  <!--<div class="left-area" style="background: rgb(255, 153, 0); width: 36%;">-->
                  <div class="left-area" style="background: rgb(89,187,115); width: 36%;">
                    <i class="icon ivu-icon ivu-icon-md-trending-down"
                       style="font-size: 36px; color: rgb(255, 255, 255);"></i>
                  </div>
                  <div class="right-area" style="width: 64%;">
                    <div>
                      <div class="count-to-wrapper"><p class="content-outer"><span id="count_to_331"
                                                                                   class="count-to-count-text count-style">{{honorOut}}</span><i
                        class="count-to-unit-text"></i></p></div>
                      <p>{{$t('user.honor.balanceOut')}}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  </div>
</template>

<script>
    import {apiLoadUserHonorBalance} from "../../api/api";

    export default {
        name: "myHonorDashboard",
        data() {
            return {
                honorBalance: 0,
                honorIn: 0,
                honorOut: 0
            }
        },
        methods: {
            loadAllData() {
                apiLoadUserHonorBalance({}).then((response) => {
                    if (response.data.errorCode === 0) {
                        this.honorBalance = response.data.data.honor
                        this.honorIn = response.data.data.honorIn
                        this.honorOut = response.data.data.honorOut
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
  @import "../../assets/gogoStyles.css";
</style>
