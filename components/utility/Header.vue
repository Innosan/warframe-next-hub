<script lang="ts" setup></script>

<template>
	<header class="flex justify-between items-center gap-4 mb-8">
		<div class="flex gap-6 items-center">
			<h1 class="font-black text-2xl text-primary text-nowrap">
				Warframe Next Hub
			</h1>
			<TopNavigation class="md:flex hidden" :links="navigation" />
			<SidebarNavigation
				class="block md:hidden"
				:navigation="navigation"
			/>
		</div>
	</header>
</template>
