import type { PriceType } from "~/types/PriceType";
import type { DropLocation } from "~/types/DropLocation";

export type GameItem = {
	id: number;
	title: string;
	image?: string;
	price?: {
		type: PriceType;
		value: number;
	};
	dropLocation: DropLocation;
	isDone: boolean;
};
