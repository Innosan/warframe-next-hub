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

		return {
			daily,
			week,
			addTask,
			removeTask,
			updateTask,
		};
	},
	{
		persist: true,
	},
);
