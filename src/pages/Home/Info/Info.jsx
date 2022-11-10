import { useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import {
    InfoContainer,
    TextWrap,
    ImageWrap1,
    TitleWrap,
    Title,
    SubTitle,
    CardList,
} from "./Info.style";
import info from "./data.json";
import { InfoCard } from "../../../components/Cards/Card";
import { Image, light } from "../../../components/Image.style";
import { cardListVariants } from "../../../animation/animate";
import { useMediaQuery } from "../../../hook/useMediaQuery";
const Info = () => {
    const media1104 = useMediaQuery("(min-width: 1104px)");
    const cardListRef = useRef();
    const isInview = useInView(cardListRef, { amount: 0.2, once: true });
    const controls = useAnimationControls();
    if (isInview && media1104) {
        controls.set("hidden");
        controls.start("visible");
    }

    const cardlist = info.map((item) => <InfoCard key={item.id} {...item} />);
    return (
        <InfoContainer>
            <TextWrap>
                <TitleWrap>
                    <ImageWrap1 width="6.5rem">
                        <Image src={light} />
                    </ImageWrap1>
                    <Title>
                        年度最強合作 <br /> 三大主題來襲
                    </Title>
                </TitleWrap>
                <SubTitle>
                    各路廠商強強聯手
                    <br />
                    共同設計出接地氣的
                    <br />
                    網頁互動挑戰關卡
                </SubTitle>
            </TextWrap>
            <CardList
                ref={cardListRef}
                as={motion.div}
                variants={cardListVariants}
                initial={media1104 && "hidden"}
                animate={controls}
            >
                {cardlist}
            </CardList>
        </InfoContainer>
    );
};

export default Info;
