import type { NavigationLink } from "~/types/NavigationLink";

export const navigation: NavigationLink[] = [
	{
		id: 1,
		to: "/",
		label: "Home",
		icon: "i-heroicons-home-solid",
	},
	{
		id: 2,
		to: "/hub",
		label: "Hub",
		icon: "i-heroicons-globe-europe-africa-solid",
	},
	{
		id: 3,
		to: "/planner",
		label: "Planner",
		icon: "i-heroicons-information-circle",
	},
	{
		id: 4,
		to: "/help",
		label: "Help",
		icon: "i-heroicons-user-group-solid",
	},
];

export const socials: NavigationLink[] = [
	{
		id: 1,
		to: "https://github.com/Innosan",
		label: "GitHub",
		icon: "i-octicon-mark-github-16",
	},
	{
		id: 2,
		to: "https://t.me/inno_san",
		label: "Telegram",
		icon: "i-streamline-telegram-solid",
	},
];
