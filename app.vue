<script setup lang="ts">
const appConfig = useAppConfig();

onMounted(() => {
	appConfig.isMobile = window.innerWidth <= 900;

	window.addEventListener("resize", () => {
		appConfig.isMobile = window.innerWidth <= 900;
	});
});

onUnmounted(() => {
	window.removeEventListener("resize", () => {
		appConfig.isMobile = window.innerWidth <= 900;
	});
});
</script>

<template>
	<div>
		<Header />
		<div class="page-container">
			<NuxtPage />
		</div>
		<Footer />
	</div>
</template>
