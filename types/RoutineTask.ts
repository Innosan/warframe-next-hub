export type RoutineTask = {
	id: string;
	title: string;
	isRefreshable: boolean;
	refreshRate: number;
	completed: boolean;
	startedAt: string;
	endedAt: string;
};
