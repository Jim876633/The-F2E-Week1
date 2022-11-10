import {
    BannerContainer,
    CenterWrap,
    ImageWrap1,
    ImageWrap2,
    ImageWrap3,
    ImageWrap4,
    ImageWrap5,
    Marquee,
} from "./Banner.style";
import { SignupButton } from "../../../components/Buttons/Button";
import {
    Image,
    bannerIcon_1,
    bannerIcon_2,
    star,
    arrowLeft,
    arrowRight,
} from "../../../components/Image.style";
import { motion } from "framer-motion";
import {
    marqueeVariants,
    moveupVariants,
    movedownVariants,
    slowupVariants,
    slowdownVariants,
} from "../../../animation/animate";

const marqueeText = (
    <motion.div
        variants={marqueeVariants}
        initial="hidden"
        animate="visible"
        custom={"-100%"}
        transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
            delay: 2,
        }}
    >
        <span>join us</span>
        <ImageWrap5 height="2.8rem">
            <Image src={star} />
        </ImageWrap5>
    </motion.div>
);

const Banner = () => {
    return (
        <BannerContainer>
            <CenterWrap>
                <motion.h1
                    variants={moveupVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 2, when: "beforeChildren" }}
                >
                    <small>4th</small> the f2e
                </motion.h1>
                <h2>互動式網頁設計</h2>
                <SignupButton large={true}></SignupButton>
                <ImageWrap1
                    as={motion.div}
                    variants={moveupVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 2, when: "beforeChildren" }}
                    width="max(10rem,12vw)"
                >
                    <Image
                        src={bannerIcon_1}
                        as={motion.img}
                        variants={slowupVariants}
                    />
                </ImageWrap1>
                <ImageWrap2
                    as={motion.div}
                    variants={movedownVariants}
                    initial="hidden"
                    animate="visible"
                    width="max(15rem,15vw)"
                >
                    <Image
                        src={bannerIcon_2}
                        as={motion.img}
                        variants={slowdownVariants}
                    />
                </ImageWrap2>
                <ImageWrap3 width="max(12rem,12vw)">
                    <Image src={arrowLeft} />
                </ImageWrap3>
                <ImageWrap4 width="max(10rem,12vw)">
                    <Image src={arrowRight} />
                </ImageWrap4>
            </CenterWrap>
            <Marquee>
                {marqueeText}
                {marqueeText}
                {marqueeText}
                {marqueeText}
                {marqueeText}
                {marqueeText}
            </Marquee>
        </BannerContainer>
    );
};

export default Banner;
