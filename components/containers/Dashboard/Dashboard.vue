<script setup lang="ts"></script>

<template>
	<UCard>
		<template #header>
			<div class="flex justify-between">
				<div class="flex items-center gap-4">
					<p class="text-2xl font-black">InnoXan</p>
					<p class="text-sm opacity-70">MR19</p>
				</div>
				<UTooltip text="Edit personal information">
					<UButton icon="i-heroicons-pencil-square-solid" />
				</UTooltip>
			</div>
		</template>
		<div class="flex gap-8">
			<TrackerItem label="Standing limit" :value="25000" />
			<TrackerItem label="Approximate plat/day" :value="80" />
			<TrackerItem label="Current items in planner" :value="6" />
		</div>
		<template #footer>
			<UButton
				leading-icon="i-heroicons-squares-plus"
				label="Add item to planner"
			/>
		</template>
	</UCard>
</template>

<style scoped></style>
