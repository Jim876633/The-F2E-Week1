import { ActivityCard } from "../../../components/Cards/Card";
import {
    Image,
    ImageWrap,
    dot1,
    dot2,
    ArrowDown,
} from "../../../components/Image.style";
import { ActivityContainer, TitleWrap, CardList } from "./Activity.style";
import data from "./data.json";

const Activity = () => {
    const cardlist = data.map((item) => (
        <>
            {item.id ? (
                <ImageWrap width="4rem">
                    <ArrowDown />
                </ImageWrap>
            ) : (
                ""
            )}
            <ActivityCard key={item.id} {...item} />
        </>
    ));

    return (
        <ActivityContainer>
            <TitleWrap>
                <ImageWrap height="4.5rem">
                    <Image src={dot1} />
                </ImageWrap>
                <h3>活動說明</h3>
                <ImageWrap height="2.5rem">
                    <Image src={dot2} />
                </ImageWrap>
            </TitleWrap>
            <CardList>{cardlist}</CardList>
        </ActivityContainer>
    );
};

export default Activity;
