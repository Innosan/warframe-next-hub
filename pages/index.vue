<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
	<h1>Home page</h1>
	<UButton @click="appConfig.ui.primary = 'green'" label="Do something" />
</template>

<style scoped></style>
