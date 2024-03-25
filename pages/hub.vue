<script setup lang="ts">
import { cycles } from "~/utils/cycles";
import { fissures } from "~/utils/fissures";
import { sortie } from "~/utils/endgame";
import { headingSizes } from "~/utils/SectionSize";
import { syndicates } from "~/utils/syndicates";
</script>

<template>
	<div class="flex flex-col gap-8">
		<!-- News section -->
		<News />

		<!-- Cycles section -->
		<Section
			section-title="Cycles"
			section-icon="i-material-symbols-auto-timer-rounded"
		>
			<div class="grid grid-cols-1 md:grid-cols-4 justify-between gap-4">
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

		<!-- Alerts / Fissures -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-12">
			<Section
				section-icon="i-heroicons-fire-16-solid"
				section-title="Fissures"
			>
				<div class="h-56 overflow-y-auto">
					<UAccordion
						:items="fissures"
						multiple
						:ui="{
							wrapper: 'flex flex-col w-full',
						}"
					>
						<template #default="{ item, index, open }">
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
									<span class="text-nowrap">{{
										item.tier
									}}</span>
									<span class="text-nowrap">{{
										item.type
									}}</span>
									<span
										class="text-gray-500 dark:text-gray-400"
										>{{ item.node }}</span
									>
									<span
										class="text-gray-500 dark:text-gray-400"
										>{{ item.enemy }}</span
									>
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
						<template #item="{ item }">
							<p
								class="italic text-gray-900 dark:text-white text-center"
							>
								{{ item.id }}
							</p>
						</template>
					</UAccordion>
				</div>
			</Section>
			<Section
				section-icon="i-heroicons-exclamation-circle"
				section-title="Alerts"
			>
				<UAccordion
					:items="alerts"
					multiple
					:ui="{ wrapper: 'flex flex-col w-full' }"
				>
					<template #default="{ item, index, open }">
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
								<span class="text-nowrap">{{
									item.mission.type
								}}</span>
								<span
									class="text-gray-500 dark:text-gray-400"
									>{{ item.mission.node }}</span
								>
								<span
									class="text-gray-500 dark:text-gray-400"
									>{{ item.mission.faction }}</span
								>
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
					<template #item="{ item }">
						<p
							class="italic text-gray-900 dark:text-white text-center"
						>
							{{ item.id }}
						</p>
					</template>
				</UAccordion>
			</Section>
		</div>

		<SectionHeading
			title="Endgame Content"
			icon="i-heroicons-sparkles-solid"
			:size="headingSizes.xl"
		/>

		<!-- Sortie / Archon Hunt -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-12">
			<DailyActivityCard
				title="Sortie"
				:info="sortie"
				:missions="sortie.variants"
			/>
			<DailyActivityCard
				title="Archon Hunt"
				:info="archon"
				:missions="archon.missions"
			/>
		</div>

		<Section
			section-title="Syndicates"
			section-icon="i-heroicons-building-library-16-solid"
		>
			<div class="grid grid-cols-6">
				<div v-for="syndicate in syndicates" class="p-2">
					<p>{{ syndicate.syndicate }}</p>
				</div>
			</div>
		</Section>
	</div>
</template>

<style scoped></style>
