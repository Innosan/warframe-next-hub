<script setup lang="ts">
import { HeadingSize, type SectionSize } from "~/utils/ui/SectionSize";
import type { PropType } from "vue";

const props = defineProps({
	title: String,
	icon: String,
	size: {
		type: Object as PropType<SectionSize>,
		default: HeadingSize.xl,
	},
});
</script>

<template>
	<div class="flex items-center gap-2">
		<UIcon :name="icon" :class="size.icon" dynamic />
		<h2 :class="'font-black text-white ' + size.text">{{ title }}</h2>
	</div>
</template>
