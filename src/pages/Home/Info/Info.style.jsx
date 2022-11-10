import styled from "styled-components";
import { ImageWrap } from "../../../components/Image.style";
import { MD1104, MD768 } from "../../../constants/style";

export const InfoContainer = styled.section`
    background: var(--clr-n5);
    padding-block: 10rem;
`;

export const TextWrap = styled.div`
    display: grid;
    gap: 4rem;
    text-align: center;
    width: min(90%, 30rem);
    margin: auto;
    ${MD768} {
        width: 60rem;
    }
`;

export const TitleWrap = styled.div`
    position: relative;
    border: 4px solid var(--clr-g1);
    padding: 2rem 4rem;
    border-radius: var(--br-button);
    box-shadow: 0 0 10px var(--shadow-green);
`;

export const ImageWrap1 = styled(ImageWrap)`
    position: absolute;
    right: -3rem;
    top: -8rem;
`;

export const Title = styled.h3`
    font-size: var(--fz-h3);
    color: var(--clr-g1);
    text-shadow: 0 0 10px var(--shadow-green);
    font-weight: 700;
    ${MD768} {
        br {
            content: "";
        }
    }
`;

export const SubTitle = styled.p`
    font-size: var(--fz-p2);
    color: var(--clr-n1);
    ${MD768} {
        br:last-child {
            content: "";
        }
    }
`;

export const CardList = styled.div`
    display: grid;
    gap: 4rem;
    width: min(90%, 30rem);
    margin-inline: auto;
    margin-top: 6rem;
    ${MD1104} {
        opacity: 0;
        display: flex;
        width: min(90%, 100rem);
        height: 35rem;
    }
`;
