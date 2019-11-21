<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.findPassword')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <div>找回密码</div>
    </Content>
  </div>
</template>

<script>
    export default {
        name: "findPassword"
    }
</script>

<style scoped>
  @import "../../../assets/gogoStyles.css";
</style>
