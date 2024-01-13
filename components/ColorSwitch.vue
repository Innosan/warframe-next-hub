<script setup lang="ts">
const changeTheme = (color: string) => {
	useAppConfig().ui.primary = color;
};

const colors = ["violet", "red", "green", "yellow"];
</script>

<template>
	<div class="flex gap-2">
		<span
			v-for="color in colors"
			@click="changeTheme(color)"
			class="circle"
			:class="'bg-' + color + '-500'"
		></span>
	</div>
</template>
