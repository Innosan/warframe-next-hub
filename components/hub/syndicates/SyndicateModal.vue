<script setup lang="ts">
import type { SyndicateMission } from "~/types/Syndicate/SyndicateMission";
import type { PropType } from "vue";

const isOpen = ref(false);

const props = defineProps({
	syndicate: {
		type: Object as PropType<SyndicateMission>,
		required: true,
	},
});
</script>

<template>
	<UButton
		:disabled="syndicate.jobs.length === 0"
		:label="syndicate.syndicate"
		@click="isOpen = true"
		color="gray"
		:variant="syndicate.jobs.length === 0 ? 'ghost' : 'solid'"
	/>

	<UModal v-model="isOpen" class="w-4/6" :ui="{ width: 'sm:max-w-2xl' }">
		<UCard>
			<template #header>
				<div class="flex gap-2 items-center justify-between">
					<h1 class="font-black opacity-70">
						{{ syndicate.syndicate }}
					</h1>
					<UButton
						icon="i-heroicons-x-mark"
						color="gray"
						variant="ghost"
						@click="isOpen = false"
					/>
				</div>
			</template>
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div
					v-for="job in syndicate.jobs"
					class="flex flex-col p-2 rounded-sm ring-1 ring-gray-800 w-full"
				>
					<div>
						<div class="flex gap-2 items-center">
							<p class="font-bold text-nowrap">{{ job.type }}</p>
							<p class="text-nowrap">
								{{ job.enemyLevels[0] }} -
								{{ job.enemyLevels[1] }}
							</p>
						</div>
						<div class="flex gap-2 text-sm opacity-80">
							<template v-for="standing in job.standingStages">
								<p>{{ standing }}</p>
							</template>
						</div>
					</div>
				</div>
			</div>
		</UCard>
	</UModal>
</template>

<style scoped></style>
