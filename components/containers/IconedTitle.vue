<script setup lang="ts">
const props = defineProps({
	icon: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div
		class="flex gap-2 items-center bg-gray-800 opacity-80 ring-1 ring-gray-700 p-2 rounded-lg text-gray-900 dark:text-white"
	>
		<UIcon :name="icon" class="w-4 h-4" dynamic />
		<p class="text-xs">
			{{ content }}
		</p>
	</div>
</template>

<style scoped></style>
