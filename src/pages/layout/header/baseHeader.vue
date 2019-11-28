<template>
  <Menu mode="horizontal" theme="dark" active-name="1" @on-select="menuClick">
    <Row>
      <Col :xs="3" :sm="3" :md="3" :lg="2">
        <a @click="onLogo"><img class="layout-logo" src="../../../assets/gogoyang.png"/></a>
      </Col>
      <Col :xs="2" :sm="2" :md="2" :lg="2">
        <a herf="" style="color: azure" class="gogo-title" @click="clickRPG">RPG</a>
      </Col>
      <Col :xs="1" :sm="1" :md="1" :lg="2">
        <Button color="#fff" icon="md-add" size="small" @click="createTask">
        </Button>
      </Col>
      <Col :xs="18" :sm="18" :md="18" :lg="18" style="float: right">
        <div style="float:right;">
          <MenuUser></MenuUser>
          <MenuLanguage></MenuLanguage>
          <MenuItem name="4">
            <div @click="onSpotlight">
              <Icon type="ios-sunny" size="24"></Icon>
            </div>
          </MenuItem>
        </div>
      </Col>
    </Row>
  </Menu>
</template>

<script>
    import MenuUser from './menuUser'
    import MenuLanguage from './menuLanguage'

    export default {
        name: "baseHeader",
        components: {
            MenuUser,
            MenuLanguage
        },
        methods: {
            createTask() {
                this.$router.push({
                    name: 'taskCreateNew'
                })
            },
            onSpotlight() {
            },
            clickRPG() {
                this.$router.push({
                    name: 'publicJobPage'
                })
            },
            menuClick(name) {
                if (name === "lanChinese") {
                    this.$i18n.locale = 'zh'
                }
                if (name === 'lanEnglish') {
                    this.$i18n.locale = 'en'
                }
                if (name === "menuSignOut") {
                    this.$store.dispatch('logout');
                }
                if (name === "menuSignIn") {
                    this.$router.push({name: "loginPage"})
                }
            },
            onLogo() {
                this.$router.push({
                    name: 'home'
                })
            }
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
</style>
