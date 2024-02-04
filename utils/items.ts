import type { GameItem } from "~/types/GameItem";
import { priceTypes } from "~/utils/prices";
import { locations } from "~/utils/locations";

export const plannerItems: GameItem[] = [
	{
		id: 1,
		title: "Melee Influence",
		image: "https://warframe.market/static/assets/items/images/en/melee_influence.ba25620e914035eba63029220d08937a.png",
		price: {
			type: priceTypes[0],
			value: 7500,
		},
		dropLocation: locations[0],
		isDone: true,
	},
	{
		id: 2,
		title: "MOLT EFFICIENCY",
		image: "https://warframe.market/static/assets/items/images/en/melee_influence.ba25620e914035eba63029220d08937a.png",
		price: {
			type: priceTypes[0],
			value: 10000,
		},
		dropLocation: locations[1],
		isDone: false,
	},
];
