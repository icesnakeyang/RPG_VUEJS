<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.userActionLogList')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <div>{{$t('job.applyTitle3')}}</div>
    </Content>
  </div>
</template>

<script>
  export default {
    name: "userActionLogList"
  }
</script>

<style scoped>
  @import "../../../assets/gogoStyles.css";
</style>
