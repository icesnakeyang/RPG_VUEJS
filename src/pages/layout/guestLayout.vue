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
        name: "guestLayout"
    }
</script>

<style scoped>
    .layout {
        padding: 0px;
        margin: 0px;
        height: 100%;
    }

    .content {
        padding: 10px;
        height: 100%;
    }
</style>
