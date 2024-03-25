import data from "~/utils/test_data.json";
import type { SyndicateMission } from "~/types/Syndicate/SyndicateMission";

export const syndicates = <SyndicateMission[]>(
	data.syndicateMissions.filter(
		(mission) => !mission.id.includes("RadioLegion"),
	)
);
