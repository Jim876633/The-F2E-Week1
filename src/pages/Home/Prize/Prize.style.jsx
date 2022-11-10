import styled from "styled-components";
import { ImageWrap } from "../../../components/Image.style";
import { MD1104, MD768 } from "../../../constants/style";

export const PrizeContainer = styled.section`
    background: var(--clr-n5);
    text-align: center;
    padding-block: 8rem;
`;

export const Title = styled.h4`
    font-size: var(--fz-h4);
    color: var(--clr-n1);
    text-shadow: 0 0 10px var(--shadow-white);
    span {
        display: inline-block;
        font-weight: 700;
    }
    ${MD1104} {
        br {
            content: "";
        }
    }
`;

export const RaceAnimation = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-block: 0.5rem;
    margin-top: 3rem;
    width: min(90%, 50rem);
    margin-inline: auto;
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 3px;
        background: var(--clr-n1);
        box-shadow: 0 0 10px var(--shadow-white);
    }
    ${MD1104} {
        width: min(80%, 100rem);
    }
`;

export const ImageWrap1 = styled(ImageWrap)`
    filter: drop-shadow(0 0 10px var(--shadow-white));
`;

export const ImageWrap2 = styled(ImageWrap)`
    margin-bottom: -0.5rem;
`;

export const CardList = styled.div`
    display: grid;
    gap: 3rem;
    width: min(90%, 50rem);
    margin-inline: auto;
    margin-top: 6rem;
    ${MD768} {
        grid-auto-rows: 1fr;
    }
    ${MD1104} {
        width: min(80%, 100rem);
        grid-template-columns: 1fr 1fr;
        & > *:hover {
            background: linear-gradient(90deg, var(--gradient-decoration))
                border-box;
            transform: translateY(-2rem);
            transition: all 0.5s;
        }
    }
`;
