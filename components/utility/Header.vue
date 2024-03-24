<script lang="ts" setup>
const appConfig = useAppConfig();
const transformedNavigation = navigation.map(({ id, ...rest }) => [rest]);
</script>

<template>
	<header class="flex justify-between items-center gap-4 mb-8">
		<div class="flex gap-6 items-center">
			<h1 class="font-black text-2xl text-primary text-nowrap">
				Warframe Next Hub
			</h1>
			<TopNavigation v-if="!appConfig.isMobile" :links="navigation" />
			<BurgerNavigation v-else :links="transformedNavigation" />
		</div>
		<div class="flex gap-4 items-center">
			<ThemeSwitch />
			<ColorSwitch />
		</div>
	</header>
</template>
