<template>
  <Menu mode="horizontal" active-name="1" @on-select="menuClick">
    <Row>
      <Col :xs="4" :sm="2" :md="2" :lg="2">
        <img class="layout-logo" src="../../../assets/gogoyang.png"/>
      </Col>
      <Col :xs="4" :sm="2" :md="1" :lg="1">
        <a herf="" class="gogo-title" @click="clickRPG">RPG</a>
      </Col>
      <Col :xs="8" :sm="2" :md="1" :lg="1">
        <Button type="primary">{{$t("command.createNewTask")}}</Button>
      </Col>
      <Col :xs="24" :sm="18" :md="20" :lg="20">
        <div class="layout-nav">
          <MenuLogin></MenuLogin>
          <MenuLanguage></MenuLanguage>
          <span style="margin-right: 40px">
            <Icon type="md-eye"/>
            <a herf="" class="gogo-title" @click="clickRPG">{{$t('command.spotlight')}}</a>
          </span>
        </div>
      </Col>
    </Row>
  </Menu>
</template>

<script>
  import MenuLogin from './menuLogin'
  import MenuLanguage from './menuLanguage'

  export default {
    name: "menuHeader1",
    components: {
      MenuLogin,
      MenuLanguage
    }
  }
</script>

<style scoped>
  .layout-logo {
    width: 32px;
    height: 32px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .gogo-title {
    font-size: 18px;
    font-weight: bold;
    color: #475063;
  }

  .layout-nav {
    float: right;
  }
</style>
