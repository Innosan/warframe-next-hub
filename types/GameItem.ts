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

export type DropLocation = {
	id: number;
	openLocation?: string;
	planet?: string;
	vendor?: string;
};

export type PriceType = {
	id: number;
	title: string;
	icon?: string;
};
