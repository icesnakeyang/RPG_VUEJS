<template>
    <div>
      <SecretaryUserPageRow v-for="user in secretaries">

      </SecretaryUserPageRow>
    </div>
</template>

<script>
  import SecretaryUserPageRow from "./secretaryUserPageRow"
  import {loadSecretary} from "../../api/api";

  export default {
        name: "secretaryUserPage",
      components:{
          SecretaryUserPageRow
      },
    data(){
          return{
            secretaries:[]
          }
    },
      methods:{
        loadSecretaryUsers() {
          loadSecretary({
            pageIndex: 0,
            pageSize: 100
          }).then((response) => {
            if (response.data.data) {
              this.secretaries = response.data.data.content;
              console.log(this.secretaries);
            }
          })
        },
      },
    mounted(){
      this.loadSecretaryUsers();
    }
    }
</script>

<style scoped>

</style>
