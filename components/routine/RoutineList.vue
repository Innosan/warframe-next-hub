<script setup lang="ts">
import { type RoutineTask, RoutineType } from "~/types/RoutineTask";
import { getFormattedDate } from "~/utils/datetime";
const props = defineProps({
	type: {
		type: String,
		required: true,
	},
});

const routineStore = useRoutineStore();
const isDaily = props.type === RoutineType.DAILY;

const items = computed(() => {
	return isDaily ? routineStore.daily : routineStore.week;
});
const leftToComplete = computed(
	() => items.value.filter((item) => !item.completed).length,
);
</script>

<template>
	<RoutineHeader
		:title="type"
		:info="
			leftToComplete === 0
				? 'All tasks completed'
				: `${leftToComplete} left`
		"
		:show-info="items.length !== 0"
		:on-add="
			(item: RoutineTask) => {
				routineStore.addTask(item, isDaily);
			}
		"
	/>

	<UDivider />

	<UAccordion v-if="items.length !== 0" :items="items">
		<!-- Item button -->
		<template
			#default="{ item, open }: { item: RoutineTask; open: boolean }"
		>
			<UButton
				color="gray"
				:variant="open ? 'solid' : 'ghost'"
				class="transition-all"
				:class="item.completed ? 'opacity-60 line-through' : ''"
			>
				<span class="truncate font-bold">{{ item.title }} </span>
				<span class="opacity-70">{{
					item.subroutines.length > 0
						? item.subroutines.filter((s) => !s.completed).length +
						  " subs left"
						: ""
				}}</span>

				<template #trailing>
					<UIcon
						name="i-heroicons-chevron-right-20-solid"
						class="w-5 h-5 ms-auto transform transition-transform duration-200"
						:class="[open && 'rotate-90']"
					/>
				</template>
			</UButton>
		</template>

		<!-- Item content -->
		<template #item="{ item }: { item: RoutineTask }">
			<div
				class="flex flex-col gap-2 p-2 ring-1 ring-gray-800 rounded-lg"
			>
				<div class="flex gap-2 w-full">
					<IconedTitle
						icon="i-heroicons-plus-circle"
						:content="getFormattedDate(item.startedAt)"
					/>
					<IconedTitle
						v-if="item.completedAt"
						icon="i-heroicons-check-badge-20-solid"
						:content="getFormattedDate(item.completedAt)"
					/>
					<IconedTitle
						v-if="item.isRefreshable"
						icon="i-heroicons-arrow-path-20-solid"
						content="auto"
					/>
				</div>

				<!-- Subtasks list -->
				<div
					v-if="item.subroutines.length !== 0"
					class="flex gap-3 flex-wrap"
				>
					<div
						v-for="subtask in item.subroutines"
						class="flex gap-2 w-min p-1.5 text-sm rounded-md items-center ring-1 ring-gray-800"
					>
						<UCheckbox
							icon="i-heroicons-x-mark"
							v-model="subtask.completed"
							size="xs"
							variant="link"
							:padded="false"
							@click="
								routineStore.changeSubroutineStatus(
									subtask.id,
									item.id,
								)
							"
						/>
						<p :class="subtask.completed ? 'line-through' : ''">
							{{ subtask.title }}
						</p>
					</div>
				</div>

				<UDivider />

				<UButtonGroup size="xs">
					<UButton
						@click="routineStore.changeTaskStatus(item.id)"
						color="gray"
						variant="solid"
						:label="
							item.completed
								? 'Make uncompleted'
								: 'Make completed'
						"
						:icon="
							item.completed
								? 'i-heroicons-x-mark'
								: 'i-heroicons-check'
						"
					/>
					<UButton
						:disabled="true"
						color="white"
						variant="solid"
						label="Edit"
						leading-icon="i-heroicons-pencil"
					/>
					<UButton
						@click="routineStore.removeTask(item.id, isDaily)"
						color="white"
						variant="solid"
						label="Delete"
						leading-icon="i-heroicons-trash"
					/>
				</UButtonGroup>
			</div>
		</template>
	</UAccordion>
	<div v-else class="p-2 opacity-70 ring-1 ring-gray-800 rounded-lg">
		<p class="font-bold">No tasks yet. Shall you add one?</p>
	</div>
</template>

<style scoped></style>
