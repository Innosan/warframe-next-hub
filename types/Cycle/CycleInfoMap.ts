interface CycleInfo {
	color: string;
	maxTime: number;
	icon: string;
}

export const getCycleInfo = (state: string, isCetus?: boolean): CycleInfo => {
	const cycleMapping: Record<string, CycleInfo> = {
		earthDay: {
			color: "sky",
			maxTime: 4 * 3600,
			icon: "i-heroicons-sun-16-solid",
		}, // 4 hours in seconds
		earthNight: {
			color: "violet",
			maxTime: 4 * 3600,
			icon: "i-heroicons-moon-16-solid",
		}, // 4 hours in seconds
		cetusDay: {
			color: "sky",
			maxTime: 100 * 60,
			icon: "i-heroicons-sun-16-solid",
		}, // 100 minutes in seconds
		cetusNight: {
			color: "violet",
			maxTime: 50 * 60,
			icon: "i-heroicons-moon-16-solid",
		}, // 50 minutes in seconds
		fass: {
			color: "orange",
			maxTime: 100 * 60,
			icon: "i-heroicons-face-smile-20-solid",
		}, // 100 minutes in seconds
		vome: {
			color: "cyan",
			maxTime: 50 * 60,
			icon: "i-heroicons-face-frown-16-solid",
		}, // 50 minutes in seconds
		warm: {
			color: "orange",
			maxTime: 40 * 60,
			icon: "i-heroicons-fire-16-solid",
		}, // 40 minutes in seconds
		cold: { color: "blue", maxTime: 20 * 60, icon: "i-ph-snowflake-bold" }, // 20 minutes in seconds
		corpus: {
			color: "cyan",
			maxTime: 150 * 60,
			icon: "i-heroicons-bolt-solid",
		}, // 150 minutes in seconds
		grineer: {
			color: "amber",
			maxTime: 150 * 60,
			icon: "i-heroicons-beaker-20-solid",
		}, // 150 minutes in seconds

		// Duviri cycles

		joy: {
			color: "teal",
			maxTime: 120 * 60,
			icon: "i-heroicons-fire",
		},
		anger: {
			color: "red",
			maxTime: 120 * 60,
			icon: "i-heroicons-fire-16-solid",
		},
		envy: {
			color: "green",
			maxTime: 120 * 60,
			icon: "i-ph-skull-bold",
		},
		sorrow: {
			color: "blue",
			maxTime: 120 * 60,
			icon: "i-ph-snowflake-bold",
		},
		fear: {
			color: "violet",
			maxTime: 120 * 60,
			icon: "i-heroicons-bolt-solid",
		},
	};

	if (state === "day") {
		return isCetus ? cycleMapping["cetusDay"] : cycleMapping["earthDay"];
	} else if (state === "night") {
		return isCetus
			? cycleMapping["cetusNight"]
			: cycleMapping["earthNight"];
	}

	return cycleMapping[state];
};
