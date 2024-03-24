import type { Mission } from "~/types/Game/Mission";

export type Alert = {
	id: string;
	activation: string;
	startString: string;
	expiry: string;
	active: boolean;
	mission: Mission;
	eta: string;
	rewardTypes: string[];
	tag?: string; // Optional field
};
