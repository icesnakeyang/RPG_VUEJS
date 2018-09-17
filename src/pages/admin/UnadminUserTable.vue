<template>
  <Table :columns="columns1" :data="data1" height="200"></Table>
</template>

<script>
  export default {
    name: "UnadminUserTable",
    data() {
      return {
        columns1: [
          {
            title: 'User ID',
            key: 'userId'
          },
          {
            title: 'Username',
            key: 'username'
          },
          {
            title: 'Real Name',
            key: 'realName'
          },
          {
            title: 'Phone',
            key: 'phone'
          },
          {
            title: 'Email',
            key: 'email'
          },
          {
            title: 'Register Time',
            key: 'regTime'
          }
        ],
        data1: [
          {
            userId: 'John Brown',
            username: 18,
            realName: 'New York No. 1 Lake Park',
            phone: '2016-10-03',
            email: 'tet.com',
            regTime: '2016-1-1 17:22:33'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
