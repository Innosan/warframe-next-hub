import type { NavigationLink } from "~/types/general";

export const navigation: NavigationLink[] = [
	{
		id: 1,
		url: "/",
		title: "Home",
		icon: "i-heroicons-home-solid",
	},
	{
		id: 2,
		url: "/about",
		title: "About",
		icon: "i-heroicons-information-circle",
	},
	{
		id: 3,
		url: "/help",
		title: "Help",
		icon: "i-heroicons-user-group-solid",
	},
];
