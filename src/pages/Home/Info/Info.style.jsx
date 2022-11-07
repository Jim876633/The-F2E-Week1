import styled from "styled-components";
import { ImageWrap } from "../../../components/Image.style";

export const InfoContainer = styled.section`
    background: var(--clr-n5);
    padding: 10rem 4rem;
`;

export const TextWrap = styled.div`
    display: grid;
    gap: 4rem;
    text-align: center;
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
`;

export const SubTitle = styled.p`
    font-size: var(--fz-p2);
    color: var(--clr-n1);
`;

export const CardList = styled.div`
    display: grid;
    gap: 4rem;
    width: 100%;
    margin-top: 6rem;
`;
