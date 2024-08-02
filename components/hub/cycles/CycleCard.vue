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

const isOpened = ref(false);
</script>

<template>
	<div
		class="grid grid-rows-1 gap-1 ring-1 transition-all rounded-lg p-3"
		:class="
			cycleInfo.choices === undefined
				? 'ring-gray-800'
				: 'ring-gray-600 cursor-pointer hover:opacity-80'
		"
		@click="
			() => {
				isOpened = !!cycleInfo.choices;
			}
		"
	>
		<p class="font-bold truncate">
			{{ cycleName }}
		</p>
		<div
			class="flex flex-col lg:flex-row gap-1 font-bold opacity-70 text-sm"
		>
			<p>
				{{
					cycleInfo.state[0].toUpperCase() + cycleInfo.state.slice(1)
				}}
			</p>
			<p v-if="cycleInfo.timeLeft" class="underline">
				for {{ cycleInfo.timeLeft }}
			</p>
		</div>
	</div>
	<UModal v-model="isOpened">
		<UCard>
			<template #header>
				<p class="font-bold text-lg">Available options</p>
			</template>
			<div
				class="flex gap-1 flex-col"
				v-for="choice in cycleInfo.choices"
			>
				<p>
					{{ choice.category === "normal" ? "Warframes" : "Weapons" }}
				</p>
				<div class="flex gap-2 opacity-80 text-sm">
					<p v-for="wfChoice in choice.choices">{{ wfChoice }}</p>
				</div>
			</div>
		</UCard>
	</UModal>
</template>

<style scoped></style>
