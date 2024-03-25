<script setup lang="ts">
import { sortie } from "~/utils/endgame";

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	info: {
		type: Object,
		required: true,
	},
	missions: {
		type: Array,
		required: true,
	},
});
</script>

<template>
	<UCard>
		<template #header>
			<div class="flex gap-2">
				<h1 class="font-black opacity-70">{{ title }}</h1>
				<p>{{ info.boss }}</p>
				<p>{{ info.eta }}</p>
			</div>
		</template>
		<div v-for="mission in missions" class="flex gap-2 flex-col">
			<p>
				{{ mission.missionType ?? mission.missionType }}
				{{ mission.type ?? mission.type }}
			</p>
		</div>
	</UCard>
</template>

<style scoped></style>
