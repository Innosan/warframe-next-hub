<script setup lang="ts">
import { fissures } from "~/utils/fissures";

enum Sort {
	Basic,
	Railjack,
	Requiem,
}

const sort = ref<Sort>(Sort.Basic);

const sortedFissures = computed(() => {
	return fissures.filter((fissure) => {
		if (sort.value === Sort.Basic) {
			return fissure.tierNum !== 5 && !fissure.isStorm;
		} else if (sort.value === Sort.Requiem) {
			return fissure.tierNum === 5;
		} else {
			return fissure.isStorm;
		}
	});
});
</script>

<template>
	<div class="h-80 overflow-y-auto scrollable-content">
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
				<div class="flex pl-0.5 w-full flex-wrap gap-2">
					<FissureContent :fissure="item" :key="index" />
				</div>
			</template>
		</UAccordion>
	</div>
	<UButtonGroup>
		<UButton
			label="Basic"
			@click="sort = Sort.Basic"
			:color="sort === Sort.Basic ? 'primary' : 'gray'"
		/>
		<UButton
			label="Railjack"
			@click="sort = Sort.Railjack"
			:color="sort === Sort.Railjack ? 'primary' : 'gray'"
		/>
		<UButton
			label="Requiem"
			@click="sort = Sort.Requiem"
			:color="sort === Sort.Requiem ? 'primary' : 'gray'"
		/>
	</UButtonGroup>
</template>
