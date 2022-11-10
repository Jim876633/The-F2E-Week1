export const marqueeVariants = {
    hidden: {
        x: 0,
    },
    visible: (i) => ({
        x: i,
    }),
};

export const moveupVariants = {
    hidden: (i) => ({
        y: i || "50%",
        opacity: 0,
    }),
    visible: {
        y: 0,
        opacity: 1,
    },
};

export const movedownVariants = {
    hidden: {
        y: "-50%",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 2, when: "beforeChildren" },
    },
};

export const slowdownVariants = {
    hidden: {
        y: 0,
    },
    visible: {
        y: [0, 10, 0],
        transition: {
            duration: 10,
        },
    },
};

export const slowupVariants = {
    hidden: {
        y: 0,
    },
    visible: {
        y: [0, -10, 0],
        transition: {
            duration: 10,
        },
    },
};

export const bounceVariants = {
    hidden: {
        scale: 0,
    },
    visible: (i) => ({
        scale: 1,
        transition: {
            type: "spring",
            duration: 1,
            bounce: 0.5,
            delay: i,
        },
    }),
};

export const scaleVariants = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 2,
        },
    },
};

export const handVariants = {
    hidden: (i) => ({
        y: ((i + 90) / 45) * 100 + "%",
        rotate: i,
        opacity: 0,
    }),
    visible: (i) => ({
        y: 0,
        rotate: i,
        opacity: 1,
        transition: {
            duration: 2,
        },
    }),
};

export const handLgVariants = {
    hidden: (i) => ({
        x: -((i + 90) / 45) * 100 + "%",
        y: -((i + 90) / 45) * 50 + "%",
        rotate: 0,
        opacity: 0,
    }),
    visible: (i) => ({
        x: 0,
        y: -((i + 90) / 45) * 50 + "%",
        rotate: 0,
        opacity: 1,
        transition: {
            duration: 2,
        },
    }),
};

export const rotateInVariants = {
    hidden: {
        x: "100%",
        y: "-100%",
        opacity: 0,
        rotate: 90,
    },
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            duration: 2,
        },
    },
};

export const cardRotateVariants = {
    hidden: (i) => ({
        rotate: 0,
        rotateY: i,
    }),
    visible: (i) => ({
        rotate: 0,
        rotateY: i + 180,
        transition: {
            duration: 1,
        },
    }),
};

export const cardListVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.5,
        },
    },
};

export const opacityVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

export const moveLeftVariants = {
    hidden: {
        x: 0,
    },
    visible: (i) => ({
        x: i,
    }),
};

export const rotateVariants = {
    hidden: {
        y: 0,
        rotate: 0,
    },
    visible: (i) => ({
        y: (i * 60) / 100,
        rotate: i,
    }),
};
