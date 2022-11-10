import styled from "styled-components";
import { MD1104, MD768 } from "../../../constants/style";

export const ActivityContainer = styled.section`
    background: var(--clr-n4);
    padding-block: 8rem;
    margin: auto;
    overflow: hidden;
`;

export const TitleWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    h3 {
        color: var(--clr-n1);
        font-weight: 700;
        font-size: var(--fz-h3);
    }
`;

export const CardList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: min(90%, 40rem);
    margin-inline: auto;
    margin-top: 4rem;
    ${MD768} {
        width: min(80%, 50rem);
        & > div:nth-child(4n + 3) > div {
            flex-direction: row-reverse;
        }
        & > div:nth-child(odd) {
        }
    }
    ${MD1104} {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 8rem 1fr;
        grid-auto-rows: 1fr 8rem 1fr;
        gap: 0;
        width: 90%;
        & > div:nth-child(2) {
            margin: auto;
        }
        & > div:nth-child(4) {
            grid-column: 3/4;
            margin: auto;
        }
        & > div:nth-child(5) {
            grid-column: 3/4;
        }
        & > div:nth-child(6) {
            margin: auto;
            grid-column: 2/3;
            grid-row: 3/4;
        }
        & > div:nth-child(7) {
            grid-column: 1/2;
            grid-row: 3/4;
        }
    }
`;
