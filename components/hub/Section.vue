<script setup lang="ts">
import { HeadingSize } from "~/utils/ui/SectionSize";

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
		<SectionHeading
			:icon="sectionIcon"
			:title="sectionTitle"
			:size="HeadingSize.lg"
		/>

		<slot />
	</div>
</template>

<style scoped></style>
