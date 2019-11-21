<template>
  <div class="layout">
    <Layout>
      <Header style="padding: 0px">
        <router-view name="head"></router-view>
      </Header>
      <Layout>
        <Sider hide-trigger>
          <router-view name="sider"></router-view>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <router-view name="content"></router-view>
        </Layout>
      </Layout>
      <router-view name="footer"></router-view>
    </Layout>
  </div>
</template>
<script>
    export default {
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
            menuitemClasses() {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider() {
                this.$refs.side1.toggleCollapse();
            }
        }
    }
</script>
