<script setup lang="ts">
import type { NavigationLink } from "~/types/NavigationLink";

const props = defineProps({
	navigation: {
		type: Array<NavigationLink>,
	},
});

const isOpen = ref(false);
</script>

<template>
	<div>
		<UButton @click="isOpen = !isOpen" icon="i-heroicons-bars-3" />

		<USlideover v-model="isOpen">
			<UCard>
				<template #header>
					<UButton
						@click="isOpen = !isOpen"
						color="gray"
						variant="ghost"
						icon="i-heroicons-x-mark"
					/>
				</template>
				<UVerticalNavigation :links="navigation" />
			</UCard>
		</USlideover>
	</div>
</template>

<style scoped></style>
