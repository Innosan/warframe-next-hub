<script setup lang="ts">
const props = defineProps({
	title: String,
	icon: String,
});
</script>

<template>
	<div class="flex items-center gap-2">
		<UIcon :name="icon" dynamic />
		<h2 class="text-2xl font-semibold text-white">{{ title }}</h2>
	</div>
</template>
