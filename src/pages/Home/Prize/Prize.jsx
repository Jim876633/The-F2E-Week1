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

const Prize = () => {
    return (
        <PrizeContainer>
            <Title>
                區區修煉已經無法滿足了嗎？
                <br />
                還有比賽等著你！
            </Title>
            <RaceAnimation>
                <ImageWrap1 height="4rem">
                    <Image src={flag} />
                </ImageWrap1>
                <ImageWrap2 height="3rem">
                    <Image src={car} />
                </ImageWrap2>
            </RaceAnimation>
            <CardList>
                <PrizeCard {...data.review} />
                <PrizeCard {...data.prize} />
            </CardList>
        </PrizeContainer>
    );
};

export default Prize;
