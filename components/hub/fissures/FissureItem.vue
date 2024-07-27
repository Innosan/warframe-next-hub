<script setup lang="ts">
import type { Fissure } from "~/types/Fissure/Fissure";
import type { PropType } from "vue";

const props = defineProps({
	fissure: {
		type: Object as PropType<Fissure>,
		required: true,
	},
	open: Boolean,
});
</script>

<template>
	<UButton
		color="gray"
		variant="ghost"
		class="border my-1 border-gray-200 dark:border-gray-800"
		:ui="{
			rounded: 'rounded-xl',
			padding: { sm: 'p-3' },
		}"
	>
		<div class="flex gap-2 items-center">
			<span class="text-nowrap">{{ fissure.tier }}</span>
			<span class="text-nowrap">{{ fissure.missionType }}</span>
			<span class="text-gray-500 dark:text-gray-400">{{
				fissure.eta
			}}</span>
		</div>

		<template #trailing>
			<UIcon
				name="i-heroicons-chevron-right-20-solid"
				class="w-5 h-5 ms-auto transform transition-transform duration-200"
				:class="[open && 'rotate-90']"
			/>
		</template>
	</UButton>
</template>

<style scoped></style>
