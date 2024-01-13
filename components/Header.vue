<script lang="ts" setup>
import type { PropType } from "vue";
import type { NavigationLink } from "~/types/general";

const props = defineProps({
	links: {
		type: Array as PropType<Array<NavigationLink>>,
		required: true,
	},
});
</script>

<template>
	<header class="flex gap-16 items-center">
		<h1 class="font-black text-2xl text-primary">Nuxt Template Project</h1>
		<nav>
			<ul>
				<li v-for="link in links">
					<IconedNavigationLink :link="link" />
				</li>
			</ul>
		</nav>
		<ThemeSwitch />
		<ColorSwitch />
	</header>
</template>
