import reactStringReplace from "react-string-replace";

import {
    ImageWrap,
    Image,
    week1,
    week2,
    week3,
    activity1,
    activity2,
    activity3,
    activity4,
    review,
    prize,
} from "../Image.style";
import {
    CardWrap,
    CardContainer,
    CardBack,
    CardTag,
    CardTitle,
    CardSubTitle,
    DetailWrap,
    TextWrap,
    CardDetial,
    CardInfo,
    Text,
    QuestionIndex,
    Question,
    Answer,
} from "./Card.style";

const infoImageList = [week1, week2, week3];
const prizeImageList = [review, prize];

export const InfoCard = ({ id, title, tag, skill }) => {
    return (
        <CardWrap>
            <CardBack>
                <CardTag># {tag}</CardTag>
                <CardTitle clr={"var(--clr-p3)"}>{title}</CardTitle>
                <CardSubTitle>{skill}</CardSubTitle>
                <ImageWrap width="12rem">
                    <Image src={infoImageList[id]} />
                </ImageWrap>
                <DetailWrap>
                    <span>week {id + 1}</span>
                    <span>查看關卡細節</span>
                </DetailWrap>
            </CardBack>
        </CardWrap>
    );
};

export const ActivityCard = ({ id, title, detail }) => {
    const formatDetail = reactStringReplace(
        detail,
        /(\d{2}[/]\d{2}|-)/g,
        (match, i) => <span key={i}>{match}</span>
    );
    const activityImageList = [activity1, activity2, activity3, activity4];
    return (
        <CardWrap>
            <CardContainer border="var(--clr-n1)">
                <ImageWrap width="10rem">
                    <Image src={activityImageList[id]} />
                </ImageWrap>
                <TextWrap>
                    <CardTitle>{title}</CardTitle>
                    <CardDetial>{formatDetail}</CardDetial>
                </TextWrap>
            </CardContainer>
        </CardWrap>
    );
};

const ReviewDetail = ({ info }) => {
    return info.map(({ heading, detail }) => (
        <>
            <h4>{heading} :</h4>
            <h5>{detail}</h5>
            <br />
        </>
    ));
};

const PrizeDetail = ({ info }) => {
    return info.map(({ heading, count, prize, detail }) => (
        <>
            <h5>{heading}:</h5>
            <h5>
                {count} <span>{prize}</span>
            </h5>
            <Text>{detail}</Text>
            <br />
        </>
    ));
};

export const PrizeCard = ({ id, title, info, remark }) => {
    return (
        <CardWrap bgLinear={true}>
            <CardContainer bg="var(--clr-n3)">
                <ImageWrap>
                    <Image src={prizeImageList[id]} />
                </ImageWrap>
                <CardTitle fz="var(--fz-h3)" clr="var(--clr-p1)" shadow={true}>
                    {title}
                </CardTitle>
                <CardInfo>
                    {id ? (
                        <PrizeDetail info={info} />
                    ) : (
                        <ReviewDetail info={info} />
                    )}
                    <h5>{remark || ""}</h5>
                </CardInfo>
            </CardContainer>
        </CardWrap>
    );
};

const FQAInfo = ({ id, question, answer }) => {
    return (
        <CardInfo>
            <Text
                fz="var(--fz-p1)"
                clr="var(--clr-p3)"
                fw="700"
                ff="var(--ff-en)"
            >
                Q {id + 1}
            </Text>
            <Text clr="var(--clr-n5)" fz="var(--fz-p1)" fw="700">
                {question}
            </Text>
            <Text clr="var(--clr-n5)" fz="var(--fz-p2)">
                {answer}
            </Text>
        </CardInfo>
    );
};

export const FQACard = ({ data }) => {
    console.log(data);
    const faqList = data.map((item) => <FQAInfo key={item.id} {...item} />);
    return (
        <CardWrap>
            <CardContainer bg="var(--clr-n1)" gap="4rem">
                {faqList}
            </CardContainer>
        </CardWrap>
    );
};

export const SponsorCard = ({ image }) => {
    return (
        <CardWrap>
            <CardContainer bg="var(--clr-n1)">
                <Image src={image} alt="sponsor" />
            </CardContainer>
        </CardWrap>
    );
};
