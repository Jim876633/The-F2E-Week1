import { Image, flag, car } from "../../../components/Image.style";
import {
    PrizeContainer,
    Title,
    RaceAnimation,
    ImageWrap1,
    ImageWrap2,
    CardList,
} from "./Prize.style";
import data from "./data.json";
import { PrizeCard } from "../../../components/Cards/Card";
import { useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { scroller } from "react-scroll";
import {
    moveLeftVariants,
    moveupVariants,
    opacityVariants,
    rotateVariants,
} from "../../../animation/animate";

const Prize = () => {
    const sectionRef = useRef();
    const raceLineRef = useRef();
    const isInview = useInView(sectionRef, { amount: 0.2, once: true });
    const controls = useAnimationControls();

    if (isInview) {
        scroller.scrollTo("prizeSection", {
            duration: 500,
            smooth: true,
        });

        controls.set("hidden");
        controls.start("visible");
    }

    return (
        <PrizeContainer ref={sectionRef} name="prizeSection">
            <Title>
                <motion.span
                    variants={moveupVariants}
                    initial="hidden"
                    animate={controls}
                    custom={"100%"}
                    transition={{ duration: 1 }}
                >
                    區區修煉已經無法滿足了嗎？
                </motion.span>
                <br />
                <motion.span
                    variants={opacityVariants}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1, delay: 1 }}
                >
                    還有比賽等著你！
                </motion.span>
            </Title>
            <RaceAnimation ref={raceLineRef}>
                <ImageWrap1
                    as={motion.div}
                    variants={rotateVariants}
                    initial="hidden"
                    animate={controls}
                    custom={-40}
                    transition={{ duration: 0.5, delay: 3 }}
                    height="4rem"
                >
                    <Image src={flag} />
                </ImageWrap1>
                <ImageWrap2
                    as={motion.div}
                    variants={moveLeftVariants}
                    whileInView={{
                        x: -raceLineRef?.current?.offsetWidth + 100,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 2 }}
                    height="3rem"
                >
                    <Image src={car} />
                </ImageWrap2>
            </RaceAnimation>
            <CardList
                as={motion.div}
                variants={moveupVariants}
                initial="hidden"
                animate={controls}
                custom={"30%"}
                transition={{ duration: 1 }}
            >
                <PrizeCard {...data.review} />
                <PrizeCard {...data.prize} />
            </CardList>
        </PrizeContainer>
    );
};

export default Prize;
