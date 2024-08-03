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
	subroutines: Subroutine[];
};

export type Subroutine = {
	id: string;
	title: string;
	completed: boolean;
};

export const createTask = (
	title: string,
	isRefreshable: boolean,
	subroutines: Subroutine[],
): RoutineTask => {
	return {
		id: uuidv4(),
		title,
		isRefreshable,
		completed: false,
		startedAt: new Date().toISOString(),
		subroutines,
	};
};

export const createSubroutine = (title: string): Subroutine => {
	return {
		id: uuidv4(),
		title,
		completed: false,
	};
};
