<script setup lang="ts">
import { plannerItems } from "~/utils/items";
</script>

<template>
	<Dashboard />
	<h1 class="text-3xl font-bold">Items to farm</h1>
	<PlannerItem v-for="item in plannerItems" :key="item.id" :item="item" />
</template>

<style scoped></style>
