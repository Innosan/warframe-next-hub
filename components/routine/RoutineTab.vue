<script setup lang="ts">
import RoutineHeader from "~/components/routine/RoutineHeader.vue";
import TaskMiscItem from "~/components/routine/TaskMiscItem.vue";

const isOpen = ref(false);
</script>

<template>
	<UButton
		icon="i-heroicons-calendar-solid"
		color="gray"
		label="Routine"
		variant="solid"
		class="transition-all"
		@click="isOpen = true"
	/>
	<USlideover side="left" v-model="isOpen">
		<UCard>
			<template #header>
				<div class="flex flex-col gap-3">
					<RoutineHeader
						title="Daily"
						info="3 left"
						:on-add="
							() => {
								console.log('aboba');
							}
						"
					/>

					<UDivider />

					<div class="grid grid-rows-3 gap-2">
						<UCard :ui="CardSize.compact">
							<template #header>
								<div class="flex items-center justify-between">
									<p class="font-bold">
										Trade with riven shards
									</p>

									<div class="flex gap-2 opacity-70">
										<TaskMiscItem
											icon="i-heroicons-globe-americas-solid"
											text="Silver Grove"
										/>
										<TaskMiscItem
											icon="i-heroicons-arrow-path-solid"
											text="Cycled: This task is refreshed daily"
										/>
									</div>
								</div>
							</template>
							<UButtonGroup size="xs">
								<UButton
									color="gray"
									variant="solid"
									label="Complete"
									icon="i-heroicons-check"
								/>
								<UButton
									color="white"
									variant="solid"
									label="Edit"
									leading-icon="i-heroicons-pencil"
								/>
								<UButton
									color="white"
									variant="solid"
									label="Delete"
									leading-icon="i-heroicons-trash"
								/>
							</UButtonGroup>
						</UCard>
						<UCard :ui="CardSize.compact">
							<template #header>
								<div class="flex items-center justify-between">
									<p class="font-bold">
										Trade with riven shards
									</p>

									<div class="flex gap-2 opacity-70">
										<TaskMiscItem
											icon="i-heroicons-globe-americas-solid"
											text="Silver Grove"
										/>
										<TaskMiscItem
											icon="i-heroicons-arrow-path-solid"
											text="Cycled: This task is refreshed daily"
										/>
									</div>
								</div>
							</template>
							<UButtonGroup size="xs">
								<UButton
									color="gray"
									variant="solid"
									label="Complete"
									icon="i-heroicons-check"
								/>
								<UButton
									color="white"
									variant="solid"
									label="Edit"
									leading-icon="i-heroicons-pencil"
								/>
								<UButton
									color="white"
									variant="solid"
									label="Delete"
									leading-icon="i-heroicons-trash"
								/>
							</UButtonGroup>
						</UCard>
						<UCard :ui="CardSize.compact">
							<template #header>
								<div class="flex items-center justify-between">
									<p class="font-bold">
										Trade with riven shards
									</p>

									<div class="flex gap-2 opacity-70">
										<TaskMiscItem
											icon="i-heroicons-globe-americas-solid"
											text="Silver Grove"
										/>
										<TaskMiscItem
											icon="i-heroicons-arrow-path-solid"
											text="Cycled: This task is refreshed daily"
										/>
									</div>
								</div>
							</template>
							<UButtonGroup size="xs">
								<UButton
									color="gray"
									variant="solid"
									label="Complete"
									icon="i-heroicons-check"
								/>
								<UButton
									color="white"
									variant="solid"
									label="Edit"
									leading-icon="i-heroicons-pencil"
								/>
								<UButton
									color="white"
									variant="solid"
									label="Delete"
									leading-icon="i-heroicons-trash"
								/>
							</UButtonGroup>
						</UCard>
						<UCard :ui="CardSize.compact">
							<template #header>
								<div class="flex items-center justify-between">
									<p class="font-bold">
										Trade with riven shards
									</p>

									<div class="flex gap-2 opacity-70">
										<TaskMiscItem
											icon="i-heroicons-globe-americas-solid"
											text="Silver Grove"
										/>
										<TaskMiscItem
											icon="i-heroicons-arrow-path-solid"
											text="Cycled: This task is refreshed daily"
										/>
									</div>
								</div>
							</template>
							<UButtonGroup size="xs">
								<UButton
									color="gray"
									variant="solid"
									label="Complete"
									icon="i-heroicons-check"
								/>
								<UButton
									color="white"
									variant="solid"
									label="Edit"
									leading-icon="i-heroicons-pencil"
								/>
								<UButton
									color="white"
									variant="solid"
									label="Delete"
									leading-icon="i-heroicons-trash"
								/>
							</UButtonGroup>
						</UCard>
					</div>
				</div>
			</template>

			<!-- WEEKLY -->

			<template #footer>
				<div class="flex flex-col gap-3">
					<RoutineHeader
						title="Weekly"
						info="3 left"
						:on-add="
							() => {
								console.log('aboba');
							}
						"
					/>

					<UDivider />

					<div>
						<UCard :ui="CardSize.compact">
							<template #header>
								<div class="flex items-center justify-between">
									<p class="font-bold">
										Trade with riven shards
									</p>

									<div class="flex gap-2 opacity-70">
										<TaskMiscItem
											icon="i-heroicons-globe-americas-solid"
											text="Silver Grove"
										/>
										<TaskMiscItem
											icon="i-heroicons-exclamation-circle"
											text="Important"
										/>
										<TaskMiscItem
											icon="i-heroicons-arrow-path-solid"
											text="Cycled: This task is refreshed daily"
										/>
									</div>
								</div>
							</template>
							<UButtonGroup size="xs">
								<UButton
									color="gray"
									variant="solid"
									label="Completed"
									icon="i-heroicons-check"
								/>
								<UButton
									color="white"
									variant="solid"
									label="Edit"
									leading-icon="i-heroicons-pencil"
								/>
								<UButton
									color="white"
									variant="solid"
									label="Delete"
									leading-icon="i-heroicons-trash"
								/>
							</UButtonGroup>
						</UCard>
					</div>
				</div>
			</template>
		</UCard>
	</USlideover>
</template>

<style scoped></style>
