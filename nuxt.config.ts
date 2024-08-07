// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: [
		"@nuxt/ui",
		"@formkit/auto-animate/nuxt",
		"@pinia/nuxt",
		"@pinia-plugin-persistedstate/nuxt",
		"@nuxt/image",
		"@hypernym/nuxt-anime",
		"@nuxt/test-utils/module",
	],

	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],

	css: ["~/assets/styles/main.css"],
});
