<template>
  <Menu mode="horizontal" theme="dark" active-name="1" @on-select="menuClick">
    <Row>
      <Col :xs="3" :sm="3" :md="3" :lg="2">
        <a @click="onLogo"><img class="layout-logo" src="../../../assets/gogoyang.png"/></a>
      </Col>
      <Col :xs="2" :sm="2" :md="2" :lg="2">
        <a herf="" style="color: azure" class="gogo-title" @click="clickRPG">RPG2</a>
      </Col>
      <Col :xs="2" :sm="1" :md="1" :lg="2">
        <Button color="#fff" icon="md-add" size="small" @click="createTask">
        </Button>
      </Col>
      <Col :xs="14" :sm="16" :md="16" :lg="16" style="float: right">
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
    data() {
      return {
        isCollapsed: false
      }
    },
    computed: {
      rotateIcon() {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
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
          this.$router.push({
            name:'loginPage'
          })
        }
        if (name === "menuSignIn") {
          this.$router.push({name: "loginPage"})
        }
      },
      onLogo() {
        this.$router.push({
          name: 'home'
        })
      },
      collapsedSider() {
        this.$refs.side1.toggleCollapse();
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

  .menu-icon{
    transition: all .3s;
  }

  .rotate-icon{
    transform: rotate(-90deg);
  }

  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
