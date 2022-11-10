import {
    Image,
    sponsor1,
    sponsor2,
    sponsor3,
    star2,
} from "../../../components/Image.style";
import {
    SponsorsContainer,
    TitleWrap,
    Title,
    SubTitle,
    ImageWrap1,
    ImageWrap2,
    SponsorsList,
} from "./Sponsors.style";
import { SponsorCard } from "../../../components/Cards/Card";

const sponsorsList = [sponsor1, sponsor2, sponsor3].map((image, index) => (
    <SponsorCard key={index} image={image} />
));

const Sponsors = () => {
    return (
        <SponsorsContainer>
            <TitleWrap>
                <Title>sponaors</Title>
                <SubTitle>鑽石級贊助商</SubTitle>
                <ImageWrap1 width="3rem">
                    <Image src={star2} alt="" />
                </ImageWrap1>
                <ImageWrap2 width="5rem">
                    <Image src={star2} alt="" />
                </ImageWrap2>
            </TitleWrap>
            <SponsorsList>{sponsorsList}</SponsorsList>
        </SponsorsContainer>
    );
};

export default Sponsors;
