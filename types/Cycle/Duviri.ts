import type { Cycle } from "~/types/Cycle/Cycle";

export type Duviri = Pick<Cycle, "id" | "expiry" | "activation" | "state"> & {
	choices: Array<DuviriChoice>;
};

export type DuviriChoice = {
	category: string;
	categoryKey: string;
	choices: Array<string>;
};
