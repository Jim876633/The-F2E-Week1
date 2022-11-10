import { motion, useAnimationControls, useInView } from "framer-motion";
import { useRef } from "react";
import { scroller } from "react-scroll";
import {
    handLgVariants,
    handVariants,
    marqueeVariants,
    moveupVariants,
    rotateInVariants,
    scaleVariants,
} from "../../../animation/animate";
import {
    Image,
    leftHand,
    rightHand,
    frontEnd,
    uiux,
    title,
} from "../../../components/Image.style";
import { useMediaQuery } from "../../../hook/useMediaQuery";
import {
    TopicContainer,
    Marquee,
    CenterContainer,
    TextContainer,
    SubTitle,
    ImageTitle,
    ImageWrap3,
    ImageWrap4,
    ImageHand,
} from "./Topic.style";

const marqueeText = (
    <>
        <span>interactive web design</span>
        <span>interactive web design</span>
        <span>interactive web design</span>
        <span>interactive web design</span>
        <span>interactive web design</span>
        <span>interactive web design</span>
    </>
);

const Topic = () => {
    const media768 = useMediaQuery("(min-width: 768px)");
    const media980 = useMediaQuery("(min-width: 980px)");
    const sectionRef = useRef();
    const isInview = useInView(sectionRef, { amount: 0.2, once: true });
    const controls = useAnimationControls();
    if (isInview) {
        scroller.scrollTo("topicSection", {
            duration: 500,
            smooth: true,
            offset: media980 ? 0 : -70,
        });
        controls.set("hidden");
        controls.start("visible");
    }
    return (
        <TopicContainer ref={sectionRef} name="topicSection">
            <Marquee
                top={1}
                as={motion.div}
                variants={marqueeVariants}
                initial="hidden"
                animate={controls}
                custom={"-50%"}
                transition={{
                    duration: 4,
                    delay: 2,
                }}
            >
                {marqueeText}
            </Marquee>
            <CenterContainer>
                <TextContainer
                    as={motion.div}
                    variants={scaleVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <ImageTitle width="30rem">
                        <Image src={title} />
                    </ImageTitle>
                    <SubTitle>
                        <span>前端工程師</span>
                        <span>&times;</span>
                        <span>UI設計師</span>
                    </SubTitle>
                </TextContainer>
                <ImageHand
                    width="15rem"
                    as={motion.div}
                    variants={media768 ? handLgVariants : handVariants}
                    initial="hidden"
                    animate={controls}
                    custom={-135}
                >
                    <Image src={rightHand} />
                </ImageHand>
                <ImageHand
                    width="15rem"
                    right={1}
                    as={motion.div}
                    variants={media768 ? handLgVariants : handVariants}
                    initial="hidden"
                    animate={controls}
                    custom={-45}
                >
                    <Image src={leftHand} />
                </ImageHand>
                <ImageWrap3
                    width="10rem"
                    as={motion.div}
                    variants={rotateInVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <Image src={frontEnd} />
                </ImageWrap3>
                <ImageWrap4
                    width="20rem"
                    as={motion.div}
                    variants={moveupVariants}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 2 }}
                >
                    <Image src={uiux} />
                </ImageWrap4>
            </CenterContainer>
            <Marquee
                as={motion.div}
                variants={marqueeVariants}
                initial="hidden"
                animate={controls}
                custom={"50%"}
                transition={{
                    duration: 4,
                    delay: 2,
                }}
            >
                {marqueeText}
            </Marquee>
        </TopicContainer>
    );
};

export default Topic;
