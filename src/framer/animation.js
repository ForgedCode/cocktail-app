export const cardMotion = {
	show: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			when: "beforeChildren",
			staggerChildren: 0.25,
		},
	},
	hidden: {
		x: -100,
		opacity: 0,
	},

	exit: {
		x: 100,
		opacity: 0,
		transition: {
			duration: 1,
			y: { stiffness: 1000, velocity: -100 },
		},
	},
};

export const fadeIn = {
	show: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
	hidden: {
		opacity: 0,
	},
};
