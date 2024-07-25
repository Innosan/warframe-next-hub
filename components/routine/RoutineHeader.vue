<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	info: {
		type: String,
		required: true,
	},
	onAdd: {
		type: Function,
		required: true,
	},
});
</script>

<template>
	<div class="flex justify-between items-center">
		<div class="flex gap-2 items-center">
			<p class="text-xl font-bold">{{ title }}</p>
			<p class="text-sm opacity-70">{{ info }}</p>
		</div>
		<div>
			<UButton
				size="sm"
				variant="ghost"
				color="gray"
				icon="i-heroicons-plus"
				label="Add new"
				@click="onAdd()"
			/>
		</div>
	</div>
</template>

<style scoped></style>
