<template>
  <div>
    <Breadcrumb class="gogo_breadcrumb">
      <BreadcrumbItem>{{$t('navigator.applyJob')}}</BreadcrumbItem>
    </Breadcrumb>
    <Content class="gogo_content">
      <div>{{$t('job.applyTitle3')}}</div>
    </Content>
  </div>
</template>

<script>
    export default {
        name: "applyJobSuccess"
    }
</script>

<style scoped>
  @import "../../../../assets/gogoStyles.css";
</style>
