import styled from "styled-components";
import { ImageWrap } from "../../../components/Image.style";
import { MD768, MD980 } from "../../../constants/style";

export const BannerContainer = styled.section`
    position: relative;
    background: var(--clr-n5);
    height: max(100vh, 65rem);
    color: var(--clr-n1);
    text-align: center;
    overflow: hidden;
    ${MD980} {
        height: calc(100vh - 10rem);
    }
`;

export const CenterWrap = styled.div`
    position: relative;
    top: max(15rem, 50%);
    width: 80%;
    margin: auto;
    transform: translateY(-70%);
    h1 {
        font-size: var(--fz-h1);
        font-family: var(--ff-en);
        text-shadow: 3px 2px var(--clr-p1), -2px -2px var(--clr-g1);
        letter-spacing: 0.2ch;
        ${MD768} {
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
        }
        small {
            display: block;
            font-size: 2.7rem;
            line-height: 3rem;
            font-family: var(--ff-p);
            letter-spacing: 0.2em;
            ${MD768} {
                margin-left: -2rem;
                margin-top: -2rem;
            }
        }
    }
    h2 {
        font-size: 2rem;
        letter-spacing: 0.8em;
        font-weight: 700;
        margin-block: 1.7rem 4.5rem;
    }
`;

export const ImageWrap1 = styled(ImageWrap)`
    position: absolute;
    top: -30%;
    left: 0;
    ${MD768} {
        top: 3rem;
    }
`;

export const ImageWrap2 = styled(ImageWrap)`
    position: absolute;
    right: 0;
    bottom: -60%;
    ${MD768} {
        bottom: -20%;
        right: max(6rem, 10vw);
    }
`;

export const ImageWrap3 = styled(ImageWrap)`
    display: none;
    ${MD768} {
        position: absolute;
        display: block;
        top: 9rem;
        left: max(10rem, 15vw);
    }
`;

export const ImageWrap4 = styled(ImageWrap)`
    display: none;
    ${MD768} {
        position: absolute;
        display: block;
        top: -1rem;
        right: 0;
    }
`;

export const ImageWrap5 = styled(ImageWrap)`
    flex-shrink: 0;
    margin-inline: 3rem;
`;

export const Marquee = styled.div`
    position: absolute;
    bottom: 2rem;
    display: flex;
    align-items: center;
    div {
        flex-shrink: 0;
        display: flex;
        align-items: center;
    }
    span {
        display: block;
        flex-shrink: 0;
        background-image: linear-gradient(180deg, var(--gradient-decoration));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: var(--clr-n5);
        -webkit-text-stroke: 0.2rem transparent;
        font-family: var(--ff-en);
        font-size: 2.8rem;
        font-weight: 700;
        letter-spacing: 0.08em;
    }
`;
