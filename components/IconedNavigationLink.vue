<script setup lang="ts">
import type { PropType } from "vue";
import type { NavigationLink } from "~/types/general";

const props = defineProps({
	link: {
		type: Object as PropType<NavigationLink>,
		required: true,
	},
});
</script>

<template>
	<NuxtLink
		class="flex gap-2 items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-xl"
		:to="link.url"
	>
		<UIcon :name="link.icon" />
		{{ link.title }}
	</NuxtLink>
</template>

<style scoped></style>
