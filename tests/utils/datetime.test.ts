import { describe, it, expect, vi, afterEach } from "vitest";
import { refreshTasks } from "~/utils/datetime";
import type { RoutineTask } from "~/types/RoutineTask";

describe("refreshTasks", () => {
	it("should refresh daily tasks if the date has changed", () => {
		const dailyTasks: RoutineTask[] = [
			{
				id: "1",
				title: "Daily Task 1",
				completed: true,
				startedAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
				completedAt: new Date(Date.now() - 43200000).toISOString(), // 12 hours ago
				isRefreshable: true,
			},
		];

		const weeklyTasks: RoutineTask[] = [];

		refreshTasks(dailyTasks, weeklyTasks);

		expect(dailyTasks[0].completed).toBe(false);
		expect(dailyTasks[0].startedAt).toBeDefined();
		expect(dailyTasks[0].completedAt).toBeUndefined();
	});

	it("should not refresh task", () => {
		const dailyTasks: RoutineTask[] = [
			{
				id: "1",
				title: "Daily Task 1",
				completed: true,
				startedAt: new Date(Date.now()).toISOString(),
				completedAt: new Date(Date.now()).toISOString(),
				isRefreshable: false,
			},
		];

		const weeklyTasks: RoutineTask[] = [];

		refreshTasks(dailyTasks, weeklyTasks);

		expect(dailyTasks[0].completed).toBe(true);
		expect(dailyTasks[0].startedAt).toBeDefined();
		expect(dailyTasks[0].completedAt).toBeDefined();
	});

	it("should refresh weekly tasks if today is Monday", () => {
		const now = new Date();
		const dayOfWeek = now.getDay();
		const daysUntilMonday = (1 + 7 - dayOfWeek) % 7;
		const nextMonday = new Date(now.getTime() + daysUntilMonday * 86400000);

		vi.setSystemTime(nextMonday);

		const dailyTasks: RoutineTask[] = [];
		const weeklyTasks: RoutineTask[] = [
			{
				id: "1",
				title: "Weekly Task 1",
				completed: true,
				startedAt: new Date(Date.now() - 604800000).toISOString(), // 7 days ago
				completedAt: new Date(Date.now() - 302400000).toISOString(), // 3.5 days ago
				isRefreshable: true,
			},
		];

		refreshTasks(dailyTasks, weeklyTasks);

		expect(weeklyTasks[0].completed).toBe(false);
		expect(weeklyTasks[0].startedAt).toBeDefined();
		expect(weeklyTasks[0].completedAt).toBeUndefined();
	});

	it("should not refresh tasks if not monday", () => {
		const now = new Date();
		vi.setSystemTime(now);

		const dailyTasks: RoutineTask[] = [];
		const weeklyTasks: RoutineTask[] = [
			{
				id: "1",
				title: "Weekly Task 1",
				completed: true,
				startedAt: new Date(Date.now() - 604800000).toISOString(), // 7 days ago
				completedAt: new Date(Date.now() - 302400000).toISOString(), // 3.5 days ago
				isRefreshable: true,
			},
		];

		refreshTasks(dailyTasks, weeklyTasks);

		expect(weeklyTasks[0].completed).toBe(false);
		expect(weeklyTasks[0].startedAt).toBeDefined();
		expect(weeklyTasks[0].completedAt).toBeUndefined();
	});

	afterEach(() => {
		vi.useRealTimers();
	});
});
