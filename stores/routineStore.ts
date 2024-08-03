import type { RoutineTask } from "~/types/RoutineTask";

export const useRoutineStore = defineStore(
	"routine-store",
	() => {
		const daily = useState<RoutineTask[]>("daily-routine", () => []);
		const week = useState<RoutineTask[]>("week-routine", () => []);

		const addTask = (task: RoutineTask, isDaily: boolean) => {
			if (isDaily) {
				daily.value.push(task);
			} else {
				week.value.push(task);
			}
		};

		const removeTask = (id: string, isDaily: boolean) => {
			if (isDaily) {
				daily.value = daily.value.filter((task) => task.id !== id);
			} else {
				week.value = week.value.filter((task) => task.id !== id);
			}
		};

		const updateTask = (task: RoutineTask, isDaily: boolean) => {
			if (isDaily) {
				const index = daily.value.findIndex((t) => t.id === task.id);
				if (index !== -1) {
					daily.value[index] = task;
				}
			} else {
				const index = week.value.findIndex((t) => t.id === task.id);
				if (index !== -1) {
					week.value[index] = task;
				}
			}
		};

		const changeTaskStatus = (id: string) => {
			const allTasks = daily.value.concat(week.value);
			const index = allTasks.findIndex((task) => task.id === id);

			if (index !== -1) {
				if (allTasks[index].completed) {
					allTasks[index].completed = false;
					allTasks[index].completedAt = undefined;
				} else {
					allTasks[index].completed = true;
					allTasks[index].completedAt = new Date().toISOString();
				}
			}
		};

		const changeSubroutineStatus = (taskId: string, subId: string) => {
			const allTasks = daily.value.concat(week.value);
			const index = allTasks.findIndex((task) => task.id === taskId);

			if (index !== -1) {
				const subIndex = allTasks[index].subroutines.findIndex(
					(sub) => sub.id === subId,
				);
				if (subIndex !== -1) {
					allTasks[index].subroutines[subIndex].completed =
						!allTasks[index].subroutines[subIndex].completed;
				}
			}
		};

		const refreshTasks = () => {
			const now = new Date();
			const isMonday = now.getDay() === 1;

			daily.value.forEach((task) => {
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
				week.value.forEach((task) => {
					if (task.isRefreshable) {
						task.completed = false;
						task.startedAt = now.toISOString();
						task.completedAt = undefined;
					}
				});
			}
		};

		return {
			daily,
			week,
			addTask,
			removeTask,
			updateTask,
			refreshTasks,
			changeTaskStatus,
			changeSubroutineStatus,
		};
	},
	{
		persist: {
			storage: persistedState.cookiesWithOptions({
				sameSite: "strict",
				maxAge: 31536000,
			}),
		},
	},
);
