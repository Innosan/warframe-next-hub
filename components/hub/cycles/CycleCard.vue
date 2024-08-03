<script setup lang="ts">
import type { PropType } from "vue";
import type { CycleInfo } from "~/types/Cycle/CycleInfo";
import { secondsToTimeString, timeStringToSeconds } from "~/utils/datetime";
import { getCycleInfo } from "~/types/Cycle/CycleInfoMap";

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

const dynamicTimeLeft = ref(
	timeStringToSeconds(props.cycleInfo.timeLeft ?? "") ?? 0,
);
const dynamicTimeString = ref(props.cycleInfo.timeLeft ?? "");

const cycleMap = getCycleInfo(
	props.cycleInfo?.state ?? "",
	props.cycleInfo.isCetus,
) ?? { maxTime: 0, color: "gray" };

onMounted(() => {
	const interval = setInterval(() => {
		if (dynamicTimeLeft.value > 0) {
			dynamicTimeLeft.value -= 1;
			dynamicTimeString.value = secondsToTimeString(
				dynamicTimeLeft.value,
			);
		} else {
			clearInterval(interval);
		}
	}, 1000);

	onUnmounted(() => {
		clearInterval(interval);
	});
});

const now = new Date();
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
		<div class="flex gap-1 items-center">
			<UIcon class="w-5 h-5" :name="cycleMap.icon" dynamic />
			<p class="font-bold truncate">
				{{ cycleName[0].toUpperCase() + cycleName.slice(1) }}
			</p>
		</div>

		<div>
			<p class="text-sm opacity-70">{{ dynamicTimeString }}</p>
			<UProgress
				:value="dynamicTimeLeft"
				:max="cycleMap.maxTime"
				:color="cycleMap.color"
			/>
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
