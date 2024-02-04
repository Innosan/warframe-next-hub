<script setup lang="ts">
import type { PropType } from "vue";
import type { GameItem } from "~/types/GameItem";

const props = defineProps({
	item: {
		type: Object as PropType<GameItem>,
		required: true,
	},
});
</script>

<template>
	<UCard>
		<!-- Item header -->
		<template #header>
			<div class="flex gap-6 items-center">
				<img :src="item.image" alt="Item image" class="w-16" />
				<p class="font-bold text-xl">{{ item.title }}</p>

				<!-- Drop source -->
				<UTooltip text="Drop source">
					<div class="grid grid-cols-2 divide-x-2">
						<p class="underline px-2 decoration-dotted opacity-70">
							{{
								item.dropLocation.openLocation ??
								item.dropLocation.planet
							}}
						</p>
						<p class="underline px-2 decoration-dotted opacity-70">
							{{ item.dropLocation.vendor }}
						</p>
					</div>
				</UTooltip>
			</div>
		</template>

		<!-- Item prices -->
		<div class="flex gap-5">
			<div class="p-3 bg-gray-800 rounded-xl">
				<p>{{ item.price.value }} {{ item.price.type.title }}</p>
			</div>
			<div class="p-3 bg-gray-800 rounded-xl">
				<p>10 plat</p>
			</div>
		</div>

		<!-- Actions -->
		<template #footer>
			<UCheckbox label="Done" help="Did you get this item today?" />
		</template>
	</UCard>
</template>

<style scoped></style>
