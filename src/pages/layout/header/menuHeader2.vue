<template>
	<span v-if="token">
            <MenuMyProfile></MenuMyProfile>
            <MenuJob2 v-if="isJobMenu"></MenuJob2>
            <MenuJob v-else="isJobMenu"></MenuJob>
            <MenuAdmin v-if="isAdmin"></MenuAdmin>
            <MenuSecretary v-if="isSecretary"></MenuSecretary>
          </span>
</template>

<script>
    export default {
        name: "menuHeader2"
    }
</script>

<style scoped>

</style>
