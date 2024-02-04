<script setup lang="ts">
const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	value: {
		type: Number,
		required: true,
	},
});
</script>

<template>
	<div>
		<p class="opacity-70">{{ label }}</p>
		<p class="text-xl font-bold">{{ value }}</p>
	</div>
</template>

<style scoped></style>
