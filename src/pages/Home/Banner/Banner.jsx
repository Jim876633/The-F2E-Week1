import {
    BannerContainer,
    CenterWrap,
    ImageWrap1,
    ImageWrap2,
    ImageWrap3,
    Marquee,
} from "./Banner.style";
import { SignupButton } from "../../../components/Buttons/Button";
import {
    Image,
    bannerIcon_1,
    bannerIcon_2,
    star,
} from "../../../components/Image.style";
import { motion } from "framer-motion";

const animation = {
    infinite: {
        x: "-100%",
        transition: {
            repeat: Infinity,
            duration: 4,
            ease: "linear",
        },
    },
};

const marqueeText = (
    <motion.div variants={animation} animate="infinite">
        <span>join us</span>
        <ImageWrap3 height="2.8rem">
            <Image src={star} />
        </ImageWrap3>
    </motion.div>
);

const Banner = () => {
    return (
        <BannerContainer>
            <CenterWrap>
                <h1>
                    <small>4th</small> the f2e
                </h1>
                <h2>互動式網頁設計</h2>
                <SignupButton large={true}></SignupButton>
            </CenterWrap>
            <ImageWrap1 width="10rem">
                <Image src={bannerIcon_1} />
            </ImageWrap1>
            <ImageWrap2 width="15rem">
                <Image src={bannerIcon_2} />
            </ImageWrap2>
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
