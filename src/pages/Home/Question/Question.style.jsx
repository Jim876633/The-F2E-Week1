import styled from "styled-components";
import { MD768, MD980 } from "../../../constants/style";

export const QuestionContainer = styled.div`
    position: relative;
    height: max(100vh, 60rem);
    background: var(--clr-n5);
`;

export const ImageContainer = styled.div`
    position: relative;
    width: max(35rem, 60%);
    height: 100%;
    margin: auto;
    div {
        position: absolute;
        top: 13%;
        left: 0;
        right: 0;
        margin: auto;
        padding-inline: 2rem;
    }
    div:nth-child(2) {
        top: 36%;
    }
    div:nth-child(3) {
        top: 60%;
    }
    ${MD768} {
        width: min(50rem, 60%);
        div:first-child {
            top: 10%;
            left: -10%;
        }
        div:nth-child(2) {
            top: 35%;
        }
        div:last-child {
            top: 55%;
        }
    }
    ${MD980} {
        width: min(90rem, 45%);
        div:first-child {
            top: 8%;
            left: -15%;
        }
        div:nth-child(2) {
            top: 33%;
        }
        div:last-child {
            top: 55%;
        }
    }
`;
