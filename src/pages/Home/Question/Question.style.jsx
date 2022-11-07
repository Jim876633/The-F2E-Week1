import styled from "styled-components";

export const QuestionContainer = styled.div`
    position: relative;
    height: 100vh;
    background: var(--clr-n5);
    div {
        position: absolute;
        top: 10rem;
        left: 0;
        right: 0;
        margin: auto;
        padding-inline: 2rem;
    }
    div:nth-child(2) {
        top: 25rem;
    }
    div:nth-child(3) {
        top: 40rem;
    }
`;
