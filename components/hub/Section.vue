<script setup lang="ts">
const props = defineProps({
	sectionIcon: {
		type: String,
		required: true,
	},
	sectionTitle: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="flex flex-col gap-4">
		<SectionHeading :icon="sectionIcon" :title="sectionTitle" />

		<slot />
	</div>
</template>

<style scoped></style>
