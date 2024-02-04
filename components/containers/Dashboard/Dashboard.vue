<script setup lang="ts">
const userStore = useUserStore();

const standingLimit = computed(() => {
	return 16000 + userStore.user.masterRank * 500;
});

const averagePlatinum = computed(() => {
	return (standingLimit.value / 10000) * 10 * 4;
});
</script>

<template>
	<UCard v-if="userStore.user.id">
		<template #header>
			<div class="flex justify-between">
				<div class="flex items-center gap-4">
					<p class="text-2xl font-black">
						{{ userStore.user.nickname }}
					</p>
					<p class="text-sm opacity-70">
						{{ userStore.user.masterRank }}
					</p>
				</div>
				<div class="flex gap-4">
					<UTooltip text="Edit personal information">
						<UButton icon="i-heroicons-pencil-square-solid" />
					</UTooltip>
					<UTooltip text="Clear user">
						<UButton
							@click="userStore.clearUser()"
							icon="i-heroicons-trash-solid"
						/>
					</UTooltip>
				</div>
			</div>
		</template>
		<div class="flex gap-8">
			<TrackerItem
				label="Standing limit"
				:value="standingLimit"
				tooltip="Standing limit based on your master rank."
			/>
			<TrackerItem
				label="Approximate plat/day"
				:value="averagePlatinum"
				tooltip="Based on your standing limit and number of syndicates."
			/>
			<TrackerItem
				label="Current items in planner"
				:value="6"
				tooltip="Tracked items"
			/>
		</div>
		<template #footer>
			<UButton
				leading-icon="i-heroicons-squares-plus"
				label="Add item to planner"
			/>
		</template>
	</UCard>
	<UserForm v-else />
</template>

<style scoped></style>
