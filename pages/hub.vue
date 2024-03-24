<script setup lang="ts">
import { cycles } from "~/utils/cycles";
</script>

<template>
	<div>
		<News />
		<!-- Cycles section -->
		<Section
			section-title="Cycles"
			section-icon="i-material-symbols-auto-timer-rounded"
		>
			<div class="grid grid-cols-4 justify-between gap-4">
				<CycleCard
					v-for="cycle in cycles"
					:key="cycle.info.id"
					:id="cycle.info.id"
					:cycleImage="cycle.image"
					:cycleName="cycle.name"
					:cycleInfo="cycle.info"
				/>
			</div>
		</Section>
	</div>
</template>

<style scoped></style>
