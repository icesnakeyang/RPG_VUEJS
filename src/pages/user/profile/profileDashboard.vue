<template>
  <div>
    <Form :model="formLeft" label-position="left" :label-width="100">
      <FormItem label="Title">
        <Input v-model="formLeft.input1"></Input>
      </FormItem>
      <FormItem label="Title name">
        <Input v-model="formLeft.input2"></Input>
      </FormItem>
      <FormItem label="Aligned title">
        <Input v-model="formLeft.input3"></Input>
      </FormItem>
    </Form>
    <Form :model="formRight" label-position="right" :label-width="100">
      <FormItem label="Title">
        <Input v-model="formRight.input1"></Input>
      </FormItem>
      <FormItem label="Title name">
        <Input v-model="formRight.input2"></Input>
      </FormItem>
      <FormItem label="Aligned title">
        <Input v-model="formRight.input3"></Input>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    name: "profileDashboard",
    data(){
      return{
        formLeft: {
          input1: '',
          input2: '',
          input3: ''
        },
        formRight: {
          input1: '',
          input2: '',
          input3: ''
        },
        formTop: {
          input1: '',
          input2: '',
          input3: ''
        }
      }
    }
  }
</script>

<style scoped>

</style>
