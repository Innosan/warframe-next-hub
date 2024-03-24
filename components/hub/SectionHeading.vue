<script setup lang="ts">
const props = defineProps({
	title: String,
	icon: String,
});
</script>

<template>
	<div class="flex items-center gap-2">
		<UIcon :name="icon" class="w-6 h-6" dynamic />
		<h2 class="text-2xl font-black text-white">{{ title }}</h2>
	</div>
</template>
