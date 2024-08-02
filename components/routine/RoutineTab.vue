<script setup lang="ts">
import { RoutineType } from "~/types/RoutineTask";

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
	<USlideover side="left" v-model="isOpen" :transition="true">
		<UCard :ui="{ ring: 'ring-0', shadow: 'shadow-none' }">
			<template #header>
				<div class="flex flex-col gap-3">
					<RoutineList :type="RoutineType.DAILY" />
				</div>
			</template>

			<template #footer>
				<div class="flex flex-col gap-3">
					<RoutineList :type="RoutineType.WEEKLY" />
				</div>
			</template>
		</UCard>
	</USlideover>
</template>

<style scoped></style>
