import type { RoutineTask } from "~/types/RoutineTask";

export const getFormattedDate = (plainDate: string): string => {
	const date = new Date(plainDate);

	const now = new Date();
	const diffTime = now.getTime() - date.getTime();
	const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

	const formatTime = (date: Date) => {
		const hours = date.getHours().toString().padStart(2, "0");
		const minutes = date.getMinutes().toString().padStart(2, "0");
		return `${hours}:${minutes}`;
	};

	if (diffDays === 0) {
		return `today at ${formatTime(date)}`;
	} else if (diffDays === 1) {
		return `yesterday at ${formatTime(date)}`;
	} else if (diffDays < 7) {
		return `${diffDays} days ago at ${formatTime(date)}`;
	} else {
		const day = date.getDate().toString().padStart(2, "0");
		const month = date.toLocaleString("default", { month: "short" });
		return `${day} ${month} at ${formatTime(date)}`;
	}
};

export const refreshTasks = (daily: RoutineTask[], weekly: RoutineTask[]) => {
	const now = new Date();
	const isMonday = now.getDay() === 1;

	daily.forEach((task) => {
		const startedAt = new Date(task.startedAt);

		const isNextDay = now.getDate() !== startedAt.getDate();

		if (task.isRefreshable && isNextDay) {
			task.completed = false;
			task.startedAt = now.toISOString();
			task.completedAt = undefined;
		}
	});

	if (!isMonday) return;
	else {
		weekly.forEach((task) => {
			if (task.isRefreshable) {
				task.completed = false;
				task.startedAt = now.toISOString();
				task.completedAt = undefined;
			}
		});
	}
};

export const timeStringToSeconds = (timeString: string): number => {
	const timeParts = timeString.split(" ");
	let totalSeconds = 0;

	timeParts.forEach((part) => {
		const value = parseInt(part.slice(0, -1));
		const unit = part.slice(-1);

		if (unit === "h") {
			totalSeconds += value * 3600;
		} else if (unit === "m") {
			totalSeconds += value * 60;
		} else if (unit === "s") {
			totalSeconds += value;
		}
	});

	return totalSeconds;
};

export const secondsToTimeString = (seconds: number): string => {
	const h = Math.floor(seconds / 3600);
	const m = Math.floor((seconds % 3600) / 60);
	const s = seconds % 60;

	const hStr = h > 0 ? `${h}h ` : "";
	const mStr = m > 0 ? `${m}m ` : "";
	const sStr = `${s}s`;

	return `${hStr}${mStr}${sStr}`.trim();
};

export const decrementTimeString = (timeString: string): string => {
	let totalSeconds = timeStringToSeconds(timeString);
	if (totalSeconds > 0) {
		totalSeconds -= 1;
	}
	return secondsToTimeString(totalSeconds);
};
