import { motion, useAnimationControls, useInView } from "framer-motion";
import { Fragment } from "react";
import { useRef } from "react";
import { moveupVariants } from "../../../animation/animate";
import { ActivityCard } from "../../../components/Cards/Card";
import {
    Image,
    ImageWrap,
    dot1,
    dot2,
    ArrowDown,
} from "../../../components/Image.style";
import { useMediaQuery } from "../../../hook/useMediaQuery";
import { ActivityContainer, TitleWrap, CardList } from "./Activity.style";
import data from "./data.json";

const Activity = () => {
    const sectionRef = useRef();
    const isInview = useInView(sectionRef, { amount: 0.2, once: true });
    const controls = useAnimationControls();
    const media1104 = useMediaQuery("(min-width:1104px)");
    if (isInview && media1104) {
        controls.set("hidden");
        controls.start("visible");
    }
    const cardlist = data.map((item) => (
        <Fragment key={item.id}>
            {item.id ? (
                <ImageWrap width="4rem">
                    <ArrowDown />
                </ImageWrap>
            ) : (
                ""
            )}
            <ActivityCard {...item} />
        </Fragment>
    ));

    return (
        <ActivityContainer ref={sectionRef}>
            <TitleWrap
                as={motion.div}
                variants={moveupVariants}
                initial={media1104 ? "hidden" : "visible"}
                animate={controls}
                custom={"100%"}
                transition={{ duration: 0.8 }}
            >
                <ImageWrap height="4.5rem">
                    <Image src={dot1} />
                </ImageWrap>
                <h3>活動說明</h3>
                <ImageWrap height="2.5rem">
                    <Image src={dot2} />
                </ImageWrap>
            </TitleWrap>
            <CardList
                as={motion.div}
                variants={moveupVariants}
                initial={media1104 ? "hidden" : "visible"}
                animate={controls}
                custom={"30%"}
                transition={{ duration: 1 }}
            >
                {cardlist}
            </CardList>
        </ActivityContainer>
    );
};

export default Activity;
