import data from "~/utils/test_data.json";

import type { Earth } from "~/types/Cycle/Earth";
import type { Cetus } from "~/types/Cycle/Cetus";
import type { Vallis } from "~/types/Cycle/Vallis";
import type { Cambion } from "~/types/Cycle/Cambion";
import type { Zariman } from "~/types/Cycle/Zariman";
import type { Duviri } from "~/types/Cycle/Duviri";

export const cycles = [
	{
		image: "",
		name: "Earth",
		info: <Earth>data.earthCycle,
	},
	{
		image: "",
		name: "Cetus",
		info: <Cetus>data.cetusCycle,
	},
	{
		image: "",
		name: "Orb Vallis",
		info: <Vallis>data.vallisCycle,
	},
	{
		image: "",
		name: "Cambion Drift",
		info: <Cambion>data.cambionCycle,
	},
	{
		image: "",
		name: "Zariman",
		info: <Zariman>data.zarimanCycle,
	},
	{
		image: "",
		name: "Duviri",
		info: <Duviri>data.duviriCycle,
	},
];
