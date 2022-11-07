import { useState } from "react";
import data from "./data.json";
import { FQAContainer, Title, TagList, Tag } from "./FQA.style";
import { FQACard } from "../../../components/Cards/Card";
import { SignupButton } from "../../../components/Buttons/Button";

const tags = Object.keys(data).map((item) => <Tag>{item}</Tag>);
const FQA = () => {
    const [currentTag, setCurrentTag] = useState(Object.keys(data)[0]);
    return (
        <FQAContainer>
            <Title>Q&A</Title>
            <TagList>{tags}</TagList>
            <FQACard data={data[currentTag]} />
            <SignupButton large={true} />
        </FQAContainer>
    );
};

export default FQA;
