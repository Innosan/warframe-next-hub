import type { Cycle } from "~/types/Cycle/Cycle";

export type Cetus = Cycle & {
	isDay: boolean;
	isCetus: boolean;
	shortString: string;
};
