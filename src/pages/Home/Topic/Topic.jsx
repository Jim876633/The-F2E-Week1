import {
    Image,
    leftHand,
    rightHand,
    frontEnd,
    uiux,
    title,
} from "../../../components/Image.style";
import {
    TopicContainer,
    Marquee,
    TextContainer,
    SubTitle,
    ImageTitle,
    ImageWrap3,
    ImageWrap4,
    ImageHand,
} from "./Topic.style";

const Topic = () => {
    return (
        <TopicContainer>
            <Marquee top={true}>interactive web design</Marquee>
            <TextContainer>
                <ImageTitle width="30rem">
                    <Image src={title} />
                </ImageTitle>
                <SubTitle>
                    <span>前端工程師</span>
                    <span>&times;</span>
                    <span>UI設計師</span>
                </SubTitle>
            </TextContainer>
            <ImageHand width="15rem">
                <Image src={rightHand} />
            </ImageHand>
            <ImageHand width="15rem" right={true}>
                <Image src={leftHand} />
            </ImageHand>
            <ImageWrap3 width="10rem">
                <Image src={frontEnd} />
            </ImageWrap3>
            <ImageWrap4 width="20rem">
                <Image src={uiux} />
            </ImageWrap4>
            <Marquee>interactive web design</Marquee>
        </TopicContainer>
    );
};

export default Topic;
