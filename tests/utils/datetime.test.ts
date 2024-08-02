import { describe, it, expect, vi, afterEach } from "vitest";
import { getFormattedDate } from "~/utils/datetime";
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
				startedAt: new Date(Date.now()).toISOString(), // 7 days ago
				completedAt: new Date(Date.now()).toISOString(), // 3.5 days ago
				isRefreshable: true,
			},
		];

		refreshTasks(dailyTasks, weeklyTasks);

		expect(weeklyTasks[0].completed).toBe(true);
		expect(weeklyTasks[0].startedAt).toBeDefined();
		expect(weeklyTasks[0].completedAt).toBeDefined();
	});

	afterEach(() => {
		vi.useRealTimers();
	});
});

describe("getFormattedDate", () => {
	it('should return "today at HH:MM" for today\'s date', () => {
		const now = new Date();
		const formattedDate = getFormattedDate(now.toISOString());
		const hours = now.getHours().toString().padStart(2, "0");
		const minutes = now.getMinutes().toString().padStart(2, "0");

		expect(formattedDate).toBe(`today at ${hours}:${minutes}`);
	});

	it('should return "yesterday at HH:MM" for yesterday\'s date', () => {
		const yesterday = new Date(Date.now() - 86400000);
		const formattedDate = getFormattedDate(yesterday.toISOString());
		const hours = yesterday.getHours().toString().padStart(2, "0");
		const minutes = yesterday.getMinutes().toString().padStart(2, "0");

		expect(formattedDate).toBe(`yesterday at ${hours}:${minutes}`);
	});

	it('should return "X days ago at HH:MM" for dates within the last 7 days', () => {
		const daysAgo = 3;
		const date = new Date(Date.now() - daysAgo * 86400000);
		const formattedDate = getFormattedDate(date.toISOString());
		const hours = date.getHours().toString().padStart(2, "0");
		const minutes = date.getMinutes().toString().padStart(2, "0");

		expect(formattedDate).toBe(
			`${daysAgo} days ago at ${hours}:${minutes}`,
		);
	});

	it('should return "DD MMM at HH:MM" for dates more than 7 days ago', () => {
		const date = new Date(Date.now() - 10 * 86400000);
		const formattedDate = getFormattedDate(date.toISOString());
		const day = date.getDate().toString().padStart(2, "0");
		const month = date.toLocaleString("default", { month: "short" });
		const hours = date.getHours().toString().padStart(2, "0");
		const minutes = date.getMinutes().toString().padStart(2, "0");

		expect(formattedDate).toBe(`${day} ${month} at ${hours}:${minutes}`);
		// aaaa
	});
});
