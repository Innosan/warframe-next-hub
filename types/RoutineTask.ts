import { v4 as uuidv4 } from "uuid";

export enum RoutineType {
	DAILY = "Daily",
	WEEKLY = "Weekly",
}

export type RoutineTask = {
	id: string;
	title: string;
	isRefreshable: boolean;
	completed: boolean;
	startedAt: string;
	completedAt?: string;
};

export const createTask = (
	title: string,
	isRefreshable: boolean,
): RoutineTask => {
	return {
		id: uuidv4(),
		title,
		isRefreshable,
		completed: false,
		startedAt: new Date().toISOString(),
	};
};
