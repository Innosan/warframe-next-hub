<script lang="ts" setup></script>

<template>
	<header class="flex justify-between items-center gap-4 mb-8">
		<div class="flex gap-6 items-center">
			<RoutineTab />
			<TopNavigation class="md:flex hidden" :links="navigation" />
			<SidebarNavigation
				class="block md:hidden"
				:navigation="navigation"
			/>
		</div>
	</header>
</template>
