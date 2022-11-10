import { useState } from "react";
import data from "./data.json";
import {
    FQAContainer,
    FQACardWrap,
    Title,
    TagList,
    TagButton,
} from "./FQA.style";
import { FQACard } from "../../../components/Cards/Card";
import { SignupButton } from "../../../components/Buttons/Button";

const FQA = () => {
    const [currentTag, setCurrentTag] = useState(Object.keys(data)[0]);

    const tags = Object.keys(data).map((item) => (
        <TagButton
            key={item}
            active={currentTag === item}
            onClick={() => {
                setCurrentTag(item);
            }}
        >
            {item}
        </TagButton>
    ));

    return (
        <FQAContainer>
            <Title>Q&A</Title>
            <TagList>{tags}</TagList>
            <FQACardWrap>
                <FQACard data={data[currentTag]} />
            </FQACardWrap>
            <SignupButton large={true} />
        </FQAContainer>
    );
};

export default FQA;
