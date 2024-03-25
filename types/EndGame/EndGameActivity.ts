import type { Mission } from "~/types/EndGame/Mission";
import type { Variant } from "~/types/EndGame/Variant";

export type EndGameActivity = {
	id: string;
	activation: string;
	startString: string;
	expiry: string;
	active: boolean;
	rewardPool: string;
	variants?: Variant[]; // Optional variants for Sortie
	missions?: Mission[];
	boss: string;
	faction: string;
	factionKey: string;
	expired: boolean;
	eta: string;
};
