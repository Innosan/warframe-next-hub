<script setup lang="ts">
const props = defineProps({
	text: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<UTooltip :text="text" class="hover:opacity-90 cursor-pointer">
		<UIcon class="w-5 h-5" :name="icon" />
	</UTooltip>
</template>

<style scoped></style>
