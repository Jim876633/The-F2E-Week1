import { QuestionContainer } from "./Question.style";
import {
    Image,
    ImageWrap,
    question1,
    question2,
    question3,
} from "../../../components/Image.style";

const Question = () => {
    return (
        <QuestionContainer>
            <ImageWrap>
                <Image src={question1} alt="question1" />
            </ImageWrap>
            <ImageWrap>
                <Image src={question2} alt="question2" />
            </ImageWrap>
            <ImageWrap>
                <Image src={question3} alt="question3" />
            </ImageWrap>
        </QuestionContainer>
    );
};

export default Question;
