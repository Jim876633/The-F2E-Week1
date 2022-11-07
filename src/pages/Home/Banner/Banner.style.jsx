import styled from "styled-components";
import { ImageWrap } from "../../../components/Image.style";

export const BannerContainer = styled.section`
    position: relative;
    background: var(--clr-n5);
    height: 100vh;
    color: var(--clr-n1);
    text-align: center;
    overflow: hidden;
`;

export const CenterWrap = styled.div`
    position: relative;
    top: 15rem;
    h1 {
        font-size: var(--fz-h1);
        font-family: var(--ff-en);

        text-shadow: 3px 2px var(--clr-p1), -2px -2px var(--clr-g1);
        letter-spacing: 0.2ch;
        small {
            display: block;
            font-size: 2.7rem;
            line-height: 3rem;
            font-family: var(--ff-p);
            letter-spacing: 0.2em;
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
    top: 7.4rem;
    left: 2.5rem;
`;

export const ImageWrap2 = styled(ImageWrap)`
    position: absolute;
    right: 1.5rem;
    bottom: 10rem;
`;

export const ImageWrap3 = styled(ImageWrap)`
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
