import type { Reward } from "~/types/Game/Reward";

export type Mission = {
	node: string;
	nodeKey: string;
	type: string;
	typeKey: string;
	faction: string;
	factionKey: string;
	reward: Reward;
	minEnemyLevel: number;
	maxEnemyLevel: number;
	nightmare: boolean;
	archwingRequired: boolean;
	isSharkwing: boolean;
	levelOverride: string;
	enemySpec: string;
	advancedSpawners: string[];
	requiredItems: string[];
	levelAuras: string[]; // Unclear type, adjust as needed
	description?: string; // Optional field
	target?: string;
};
