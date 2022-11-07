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
const Info = () => {
    const cardlist = info.map((item) => <InfoCard key={item.id} {...item} />);
    return (
        <InfoContainer>
            <TextWrap>
                <TitleWrap>
                    <ImageWrap1 width="6.5rem">
                        <Image src={light} />
                    </ImageWrap1>
                    <Title>
                        年度最強合作
                        <br />
                        三大主題來襲
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
            <CardList>{cardlist}</CardList>
        </InfoContainer>
    );
};

export default Info;
