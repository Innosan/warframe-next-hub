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
	<UCard :ui="CardSize.compact">
		<template #header>
			<div class="flex gap-2 items-center">
				<p class="text-xl font-bold">{{ cycleName }}</p>
				-
				<p class="opacity-70 uppercase underline">
					{{ cycleInfo.state }}
				</p>
			</div>
		</template>
		<p v-if="cycleInfo.timeLeft">{{ cycleInfo.timeLeft }}</p>
		<template v-if="cycleInfo.choices">
			<div
				class="flex gap-1 flex-col"
				v-for="choice in cycleInfo.choices"
			>
				<p>{{ choice.category }}</p>
				<div class="flex gap-2 opacity-80 text-sm">
					<p v-for="wfChoice in choice.choices">{{ wfChoice }}</p>
				</div>
			</div>
		</template>
	</UCard>
</template>

<style scoped></style>
