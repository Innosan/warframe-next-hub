import type { User } from "~/types/User";

export const useUserStore = defineStore(
	"user-store",
	() => {
		const user = useState("user", () => <User>{});

		function updateUserField(field: string, newValue: string | number) {
			user.value[field] = newValue;
		}

		function createUser(id: string, nickname: string, masteryRank: number) {
			user.value = {
				id: id,
				nickname: nickname,
				masterRank: masteryRank,
			};
		}

		function clearUser() {
			user.value = <User>{};
		}

		return {
			user,
			updateUserField,
			createUser,
			clearUser,
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
