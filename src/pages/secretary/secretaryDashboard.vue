<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.secretaryDashboard')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <div>Dashboard</div>
    </Content>
  </div>
</template>

<script>
    export default {
        name: "secretaryDashboard"
    }
</script>

<style scoped>
  @import "../../assets/gogoStyles.css";
</style>
