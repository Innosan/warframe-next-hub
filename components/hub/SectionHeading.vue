<script setup lang="ts">
import { headingSizes, type SectionSize } from "~/utils/SectionSize";
import type { PropType } from "vue";

const props = defineProps({
	title: String,
	icon: String,
	size: {
		type: Object as PropType<SectionSize>,
		default: headingSizes.xl,
	},
});
</script>

<template>
	<div class="flex items-center gap-2">
		<UIcon :name="icon" :class="size.icon" dynamic />
		<h2 :class="'font-black text-white ' + size.text">{{ title }}</h2>
	</div>
</template>
