<script setup lang="ts">
import { navigation } from "~/utils/navigation.js";
</script>

<template>
	<div>
		<Header :links="navigation" />
		<div class="page-container">
			<NuxtPage />
		</div>
	</div>
</template>
