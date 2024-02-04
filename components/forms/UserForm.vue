<script setup lang="ts">
const userStore = useUserStore();

const isOpen = ref(false);

const nickname = ref("");
const masterRank = ref(0);
const id = ref("");
</script>

<template>
	<UButton label="Create user" @click="isOpen = true" />

	<UModal v-model="isOpen">
		<UCard>
			<template #header>
				<div class="flex items-center justify-between">
					<h2 class="text-2xl font-bold">Create user</h2>
					<UButton
						color="gray"
						variant="ghost"
						icon="i-heroicons-x-mark-20-solid"
						class="-my-1"
						@click="isOpen = false"
					/>
				</div>
			</template>
			<div class="grid gap-8">
				<UFormGroup label="Nickname">
					<UInput
						placeholder="DE_Nickname"
						icon="i-heroicons-user-circle-solid"
						v-model="nickname"
					/>
				</UFormGroup>
				<UFormGroup label="Mastery Rank">
					<UInput
						placeholder="23"
						type="number"
						icon="i-heroicons-sparkles-solid"
						v-model="masterRank"
					/>
				</UFormGroup>
			</div>
			<template #footer>
				<UButton
					label="Confirm"
					@click="
						userStore.createUser(
							nickname + masterRank.toString(),
							nickname,
							masterRank,
						)
					"
				/>
			</template>
		</UCard>
	</UModal>
</template>

<style scoped></style>
