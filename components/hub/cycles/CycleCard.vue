<script setup lang="ts">
import type { PropType } from "vue";
import type { CycleInfo } from "~/types/Cycle/CycleInfo";

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
	cycleImage: {
		type: String,
		required: true,
	},
	cycleName: {
		type: String,
		required: true,
	},
	cycleInfo: {
		type: Object as PropType<CycleInfo>,
		required: true,
	},
});
</script>

<template>
	<UCard>
		<template #header>
			<div class="flex gap-2 items-center">
				<p class="text-xl font-bold">{{ cycleName }}</p>
				-
				<p class="opacity-70 uppercase underline">
					{{ cycleInfo.state }}
				</p>
			</div>
		</template>
		<p>{{ cycleInfo.expiry }}</p>
	</UCard>
</template>

<style scoped></style>
