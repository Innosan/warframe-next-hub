<script setup lang="ts">
import { fissures } from "~/utils/fissures";

// tier 1-4 && !isStorm - basic
// railjack - requiem (1)
// tier === 5 - requiem (2)
const sort = ref(0);

const sortedFissures = computed(() => {
	return fissures.filter((fissure) => {
		if (sort.value === 0) {
			return fissure.tierNum !== 5 && !fissure.isStorm;
		} else if (sort.value === 1) {
			return fissure.isStorm;
		} else {
			return fissure.tierNum === 5;
		}
	});
});
</script>

<template>
	<div class="h-80 overflow-y-auto">
		<UAccordion
			:items="sortedFissures"
			multiple
			:ui="{
				wrapper: 'flex flex-col w-full',
			}"
		>
			<template #default="{ item, index, open }">
				<FissureItem :fissure="item" :key="index" :open="open" />
			</template>
			<template #item="{ item, index }">
				<FissureContent :fissure="item" :key="index" />
			</template>
		</UAccordion>
	</div>
	<UButtonGroup>
		<UButton
			label="Basic"
			@click="sort = 0"
			:color="sort === 0 ? 'primary' : 'gray'"
		/>
		<UButton
			label="Railjack"
			@click="sort = 1"
			:color="sort === 1 ? 'primary' : 'gray'"
		/>
		<UButton
			label="Requiem"
			@click="sort = 2"
			:color="sort === 2 ? 'primary' : 'gray'"
		/>
	</UButtonGroup>
</template>
