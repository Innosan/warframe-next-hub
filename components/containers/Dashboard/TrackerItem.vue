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
	tooltip: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<UTooltip :text="tooltip">
		<div>
			<p class="opacity-70">{{ label }}</p>
			<p class="text-xl font-bold">{{ value }}</p>
		</div>
	</UTooltip>
</template>

<style scoped></style>
