import { QuestionContainer, ImageContainer } from "./Question.style";
import {
    Image,
    ImageWrap,
    question1,
    question1_lg,
    question2_lg,
    question3_lg,
    question2,
    question3,
} from "../../../components/Image.style";
import { bounceVariants } from "../../../animation/animate";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { useRef } from "react";
import { scroller } from "react-scroll";

const Question = () => {
    const sectionRef = useRef();
    const isInview = useInView(sectionRef, { amount: 0.2 });
    const controls = useAnimationControls();

    if (isInview) {
        scroller.scrollTo("questionSection", {
            duration: 500,
            smooth: true,
        });
        controls.set("hidden");
        controls.start("visible");
    }

    return (
        <QuestionContainer ref={sectionRef}>
            <ImageContainer name="questionSection">
                <ImageWrap
                    width="100%"
                    as={motion.div}
                    variants={bounceVariants}
                    initial="hidden"
                    animate={controls}
                    custom={0.5}
                >
                    <picture>
                        <source
                            srcSet={question1_lg}
                            media="(min-width : 768px)"
                        />
                        <Image src={question1} alt="question1" />
                    </picture>
                </ImageWrap>
                <ImageWrap
                    width="100%"
                    as={motion.div}
                    variants={bounceVariants}
                    initial="hidden"
                    animate={controls}
                    custom={1}
                >
                    <picture>
                        <source
                            srcSet={question2_lg}
                            media="(min-width : 768px)"
                        />
                        <Image src={question2} alt="question2" />
                    </picture>
                </ImageWrap>
                <ImageWrap
                    width="100%"
                    as={motion.div}
                    variants={bounceVariants}
                    initial="hidden"
                    animate={controls}
                    custom={1.5}
                >
                    <picture>
                        <source
                            srcSet={question3_lg}
                            media="(min-width : 768px)"
                        />
                        <Image src={question3} alt="question3" />
                    </picture>
                </ImageWrap>
            </ImageContainer>
        </QuestionContainer>
    );
};

export default Question;
