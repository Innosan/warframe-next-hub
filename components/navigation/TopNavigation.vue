<script setup lang="ts">
import type { PropType } from "vue";
import type { NavigationLink } from "~/types/NavigationLink";

const props = defineProps({
	links: {
		type: Array as PropType<Array<NavigationLink>>,
		required: true,
	},
});
</script>

<template>
	<nav>
		<ul>
			<li v-for="link in links">
				<IconedNavigationLink :link="link" />
			</li>
		</ul>
	</nav>
</template>

<style scoped></style>
