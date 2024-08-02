<script setup lang="ts">
import type { EndGameActivity } from "~/types/EndGame/EndGameActivity";
import type { PropType } from "vue";
import { CardSize } from "~/utils/ui/CardSize";

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	info: {
		type: Object as PropType<EndGameActivity>,
		required: true,
	},
});
</script>

<template>
	<UCard :ui="CardSize.compact">
		<template #header>
			<div class="flex gap-2">
				<h1 class="font-black opacity-70">{{ title }}</h1>
				<p>{{ info.boss }}</p>
				<p>{{ info.eta }}</p>
			</div>
		</template>

		<!-- Sortie missions -->
		<template v-if="info.variants">
			<div v-for="mission in info.variants" class="flex gap-2 flex-col">
				<p>
					{{ mission.missionType }}
				</p>
			</div>
		</template>

		<!-- Archon missions -->
		<template v-if="info.missions">
			<div v-for="mission in info.missions" class="flex gap-2 flex-col">
				<p>
					{{ mission.type }}
				</p>
			</div>
		</template>
	</UCard>
</template>

<style scoped></style>
