<script setup lang="ts">
import { v4 } from "uuid";
import { createTask, type RoutineTask } from "~/types/RoutineTask";
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
	const task = createTask(taskTitle.value, isRefreshed.value);
	props.onAdd(task);

	closeEditor();
};
</script>

<template>
	<div v-auto-animate>
		<div class="flex justify-between items-center">
			<div class="flex gap-2 w-auto items-center">
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
				<template #header>
					<UInput
						placeholder="Make something..."
						v-model="taskTitle"
					/>
				</template>
				<div class="flex gap-2 flex-col">
					<UCheckbox
						v-model="isRefreshed"
						name="task-refresh-state"
						:label="'Refresh this ' + title.toLowerCase() + '?'"
					/>
				</div>
			</UCard>
		</div>
	</div>
</template>

<style scoped></style>
