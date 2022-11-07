import styled, { css } from "styled-components";
import { ImageWrap, grid } from "../../../components/Image.style";

export const TopicContainer = styled.section`
    position: relative;
    display: grid;
    place-content: center;
    height: calc(100vh - 7rem);
    width: 100%;
    overflow: hidden;
    background-image: url(${grid});
`;

export const Marquee = styled.div`
    position: absolute;
    width: 200%;
    background: linear-gradient(90deg, var(--gradient-decoration));
    font-family: var(--ff-en);
    font-size: var(--fz-p2);
    color: var(--clr-n1);
    letter-spacing: 0.1em;
    padding: 0.5rem 1rem;
    ${(props) =>
        props.top
            ? css`
                  top: 0;
              `
            : css`
                  bottom: 0;
              `}
`;

export const TextContainer = styled.div`
    display: grid;
    gap: 1.5rem;
`;

export const SubTitle = styled.h4`
    display: flex;
    justify-content: center;
    gap: 3rem;
    span {
        font-size: var(--fz-sub);
        font-weight: 700;
    }
`;

export const ImageTitle = styled(ImageWrap)`
    padding-left: 1rem;
`;

export const ImageHand = styled(ImageWrap)`
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    margin: auto;
    ${(props) =>
        props.right
            ? css`
                  top: 5rem;
                  transform: rotate(-45deg);
              `
            : css`
                  bottom: 5rem;
                  transform: rotate(-135deg);
              `}
`;

export const ImageWrap3 = styled(ImageWrap)`
    position: absolute;
    top: 10rem;
    right: 1.5rem;
`;

export const ImageWrap4 = styled(ImageWrap)`
    position: absolute;
    bottom: -3rem;
    left: -3rem;
`;
