<script setup lang="ts">
import type { News } from "~/types/News";
import data from "~/utils/test_data.json";

const news: Array<News> = data.news;
</script>

<template>
	<UCarousel
		v-slot="{ item }"
		:items="news"
		indicators
		:ui="{
			item: 'basis-full md:basis-1/2 lg:basis-1/3 px-2 hover:opacity-80 transition-all cursor-pointer',
			indicators: {
				wrapper: 'relative bottom-0 mt-4',
			},
		}"
	>
		<NewsCard :item="item" />
	</UCarousel>
</template>

<style scoped></style>
