<script setup lang="ts">
import type { PropType } from "vue";
import type { News } from "~/types/News";

const props = defineProps({
	item: {
		type: Object as PropType<News>,
		required: true,
	},
});

const newsTypes = [
	{
		icon: "i-heroicons-arrow-path-rounded-square-20-solid",
		label: "Update",
		active: props.item?.update ?? false,
	},
	{
		icon: "i-heroicons-sparkles-solid",
		label: "Prime Access",
		active: props.item?.primeAccess ?? false,
	},
	{
		icon: "i-heroicons-tv-solid",
		label: "Stream",
		active: props.item?.stream ?? false,
	},
	{
		label: "Info",
		icon: "i-heroicons-information-circle-solid",
		active: !(
			props.item?.stream &&
			props.item?.update &&
			props.item?.primeAccess
		),
	},
];
</script>

<template>
	<a
		class="grid justify-between items-stretch opacity-100"
		:href="item.link"
		draggable="false"
		target="_blank"
	>
		<NuxtImg
			:src="item.imageLink"
			:alt="item.message + ' image'"
			:key="item.id"
			class="rounded-xl ring-2 ring-gray-800 my-1 mx-1"
			draggable="false"
			placeholder
		/>
		<div class="absolute flex gap-3 top-0 p-4">
			<template v-for="type in newsTypes">
				<div
					class="flex opacity-75 gap-2 p-2 items-center bg-gray-900 rounded-xl"
					v-if="type.active"
				>
					<UIcon :name="type.icon" />
					<span>{{ type.label }}</span>
				</div>
			</template>
		</div>

		<span class="absolute bottom-0 font-bold p-4 text-lg w-4/12">
			{{ item.message }}
		</span>
	</a>
</template>

<style scoped></style>
