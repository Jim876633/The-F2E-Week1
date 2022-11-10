import styled, { css } from "styled-components";
import { ImageWrap, grid } from "../../../components/Image.style";
import { MD768, MD980 } from "../../../constants/style";

export const TopicContainer = styled.section`
    position: relative;
    height: calc(100vh - 7rem);
    width: 100%;
    overflow: hidden;
    background-image: url(${grid});
    ${MD980} {
        height: max(100vh, 60rem);
    }
`;

export const Marquee = styled.div`
    position: absolute;
    width: 200%;
    background: linear-gradient(90deg, var(--gradient-decoration));
    color: var(--clr-n1);
    letter-spacing: 0.1em;
    padding: 0.5rem 1rem;
    display: flex;
    gap: 2rem;
    ${(props) =>
        props.top
            ? css`
                  top: 0;
              `
            : css`
                  bottom: 0;
                  right: 0;
              `}
    span {
        flex-shrink: 0;
        font-size: var(--fz-p2);
        font-family: var(--ff-en);
    }
`;

export const CenterContainer = styled.div`
    position: relative;
    display: grid;
    place-content: center;
    width: min(100%, 50rem);
    height: 100%;
    margin: auto;
    ${MD768} {
        width: 80%;
    }
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
    ${MD768} {
        width: min(50vw, 50rem);
    }
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
                  ${MD768} {
                      top: calc((100vh - 7rem) / 2);
                      left: auto;
                      width: 18vw;
                  }
                  ${MD980} {
                      top: calc(100vh / 2);
                  }
              `
            : css`
                  bottom: 5rem;
                  ${MD768} {
                      bottom: calc((100vh - 7rem) / 2);
                      right: auto;
                      width: 18vw;
                  }
                  ${MD980} {
                      bottom: calc(100vh / 2);
                  }
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
