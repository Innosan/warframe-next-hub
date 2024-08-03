export type SectionSize = {
	text: string;
	icon: string;
};

export const HeadingSize = {
	sm: <SectionSize>{
		text: "text-sm",
		icon: "w-3 h-3",
	},
	lg: <SectionSize>{
		text: "text-xl",
		icon: "w-6 h-6",
	},
	xl: <SectionSize>{
		text: "text-2xl",
		icon: "w-6 h-6",
	},
};
