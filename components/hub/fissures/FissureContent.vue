<script setup lang="ts">
import type { PropType } from "vue";
import type { Fissure } from "~/types/Fissure/Fissure";
import FissureContentItem from "~/components/hub/fissures/FissureContentItem.vue";

const props = defineProps({
	fissure: {
		type: Object as PropType<Fissure>,
		required: true,
	},
});
</script>

<template>
	<FissureContentItem :content="fissure.enemy" icon="i-f7-scope" />
	<FissureContentItem
		:content="fissure.node"
		icon="i-bitcoin-icons-node-2-connections-outline"
	/>
</template>

<style scoped></style>
