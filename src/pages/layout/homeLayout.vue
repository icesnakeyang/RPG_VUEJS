<template>
  <Layout class="layout">
    <Header>
      <router-view name="head"></router-view>
    </Header>
    <Content class="content">
      <router-view name="content"></router-view>
    </Content>
    <Footer style="text-align: center">
      <router-view name="footer"></router-view>
    </Footer>
  </Layout>
</template>

<script>
    export default {
        name: "homeLayout"
    }
</script>

<style scoped>

</style>
