import type { SyndicateJob } from "~/types/Syndicate/SyndicateJob";

export type SyndicateMission = {
	id: string;
	activation: string;
	startString: string;
	expiry: string;
	active: boolean;
	syndicate: string;
	syndicateKey: string;
	nodes: string[];
	jobs: SyndicateJob[];
	eta: string;
};
