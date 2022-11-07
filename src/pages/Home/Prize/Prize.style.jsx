import styled from "styled-components";
import { ImageWrap } from "../../../components/Image.style";

export const PrizeContainer = styled.section`
    background: var(--clr-n5);
    text-align: center;
    padding: 8rem 1.5rem;
`;

export const Title = styled.h4`
    font-size: var(--fz-h4);
    font-weight: 700;
    color: var(--clr-n1);
    text-shadow: 0 0 10px var(--shadow-white);
`;

export const RaceAnimation = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-block: 0.5rem;
    margin-top: 3rem;
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 3px;
        background: var(--clr-n1);
        box-shadow: 0 0 10px var(--shadow-white);
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
    gap: 2.5rem;
    margin-top: 6rem;
`;
