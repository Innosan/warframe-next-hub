<script setup lang="ts">
import { v4 } from "uuid";
import {
	createSubroutine,
	createTask,
	type RoutineTask,
	type Subroutine,
} from "~/types/RoutineTask";
import { CardSize } from "~/utils/ui/CardSize";
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	info: {
		type: String,
		required: true,
	},
	showInfo: {
		type: Boolean,
		default: true,
	},
	onAdd: {
		type: Function,
		required: true,
	},
});

const showEditor = ref(false);
const randomKey = Math.random().toString(36).substring(7);

const taskTitle = ref("");
const subtaskTitle = ref("");
const subtasks = ref<Subroutine[]>([]);
const isRefreshed = ref(false);

const isSubmitAllowed = computed(() => {
	return taskTitle.value.length === 0;
});

const closeEditor = () => {
	showEditor.value = false;

	taskTitle.value = "";
	isRefreshed.value = false;
};

const saveTask = () => {
	const task = createTask(taskTitle.value, isRefreshed.value, subtasks.value);
	props.onAdd(task);

	closeEditor();
};
</script>

<template>
	<div v-auto-animate>
		<div class="flex justify-between items-center">
			<div class="flex flex-col text-nowrap w-auto">
				<p class="text-xl font-bold">{{ title }}</p>
				<p v-if="showInfo" class="text-sm opacity-70">{{ info }}</p>
			</div>
			<div
				v-auto-animate="{ duration: 100 }"
				class="w-[200px] flex justify-end"
			>
				<div v-if="!showEditor" class="justify-self-end">
					<UButton
						@click="showEditor = true"
						size="sm"
						variant="solid"
						color="gray"
						class="w-full"
						icon="i-heroicons-plus"
						label="Add new"
					/>
				</div>
				<div v-else class="flex max-w-full gap-2">
					<UButton
						@click="closeEditor"
						size="sm"
						variant="ghost"
						color="gray"
						icon="i-heroicons-x-mark"
						label="Close"
					/>
					<UButton
						@click="saveTask"
						:disabled="isSubmitAllowed"
						size="sm"
						variant="solid"
						color="gray"
						icon="i-heroicons-check"
						label="Save"
					/>
				</div>
			</div>
		</div>
		<div
			v-if="showEditor"
			class="flex gap-4 flex-col pt-2"
			:key="showEditor + randomKey"
		>
			<UDivider />
			<UCard :ui="CardSize.compact">
				<!-- Task title -->
				<template #header>
					<UInput
						placeholder="Make something..."
						leading-icon="i-heroicons-bars-3"
						v-model="taskTitle"
					/>
				</template>

				<!-- Subtasks list -->
				<div
					v-if="subtasks.length !== 0"
					class="pb-3 flex gap-3 flex-wrap"
				>
					<div
						v-for="subtask in subtasks"
						class="flex gap-1 w-max p-1.5 text-sm rounded-md items-center ring-1 ring-gray-800"
					>
						<p>{{ subtask.title }}</p>
						<UButton
							icon="i-heroicons-x-mark"
							size="xs"
							variant="link"
							:padded="false"
							color="gray"
							@click="
								subtasks.splice(subtasks.indexOf(subtask), 1)
							"
						/>
					</div>
				</div>

				<!-- Subtasks input -->
				<UInput
					v-model="subtaskTitle"
					name="q"
					leading-icon="i-heroicons-bars-arrow-down"
					placeholder="Subtask something..."
					autocomplete="off"
					:ui="{ icon: { trailing: { pointer: '' } } }"
				>
					<template #trailing>
						<UButton
							v-show="subtaskTitle !== ''"
							color="gray"
							variant="link"
							icon="i-heroicons-plus"
							:padded="false"
							@click="
								subtasks.push(createSubroutine(subtaskTitle));
								subtaskTitle = '';
							"
						/>
					</template>
				</UInput>

				<!-- Miscellaneous -->
				<template #footer>
					<div class="flex gap-2 flex-col">
						<UCheckbox
							v-model="isRefreshed"
							name="task-refresh-state"
							:label="'Refresh this ' + title.toLowerCase() + '?'"
						/>
					</div>
				</template>
			</UCard>
		</div>
	</div>
</template>

<style scoped></style>
