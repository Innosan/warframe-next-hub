export const useSettingsStore = defineStore(
	"settings-store",
	() => {
		const pinnedSections = useState<string[]>("pinned-sections", () => []);
	},
	{
		persist: {
			storage: persistedState.cookiesWithOptions({
				sameSite: "strict",
				maxAge: 31536000,
			}),
		},
	},
);
