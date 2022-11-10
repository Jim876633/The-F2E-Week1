import styled from "styled-components";
import { ImageWrap } from "../../../components/Image.style";
import { MD768 } from "../../../constants/style";

export const SponsorsContainer = styled.section`
    background: var(--clr-n3);
    padding: 5rem;
`;

export const TitleWrap = styled.div`
    position: relative;
    text-align: center;
    width: min(100%, 35rem);
    margin: auto;
`;

export const Title = styled.h3`
    font-size: var(--fz-h3);
    color: var(--clr-n1);
    font-family: var(--ff-en);
    font-weight: 700;
`;

export const SubTitle = styled.h4`
    font-size: var(--fz-h4);
    color: var(--clr-n1);
    font-weight: 700;
`;

export const ImageWrap1 = styled(ImageWrap)`
    position: absolute;
    top: -1rem;
    right: -2rem;
`;

export const ImageWrap2 = styled(ImageWrap)`
    position: absolute;
    left: -3rem;
    top: 2rem;
`;

export const SponsorsList = styled.div`
    display: grid;
    gap: 3rem;
    width: min(80%, 25rem);
    margin: 5rem auto 2rem;
    ${MD768} {
        display: flex;
        width: min(100%, 55rem);
    }
`;
