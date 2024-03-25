export type SyndicateJob = {
	id: string;
	rewardPool: string[];
	type: string;
	enemyLevels: number[];
	standingStages: number[];
	minMR: number;
	expiry: string;
	timeBound?: string;
	isVault?: boolean;
	locationTag?: string;
};
