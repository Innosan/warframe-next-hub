<script setup lang="ts">
const props = defineProps({
	fissure: {
		type: Object,
	},
});
</script>

<template>
	<p class="italic text-gray-900 dark:text-white text-center">
		{{ fissure.id }}
	</p>
</template>

<style scoped></style>
