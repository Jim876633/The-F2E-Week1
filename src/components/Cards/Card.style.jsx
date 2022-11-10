import styled, { css } from "styled-components";
import { MD1104, MD768 } from "../../constants/style";

export const CardWrap = styled.div`
    position: relative;
    width: 100%;
    height: ${(props) => props.h || "auto"};
    border-radius: var(--br-card);
    ${(props) =>
        props.bgLinear
            ? css`
                  background: linear-gradient(90deg, var(--gradient-card-stock))
                      border-box;
                  border: 3px solid transparent;
              `
            : ""}
    perspective:150rem;
`;

export const CardFont = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    backface-visibility: hidden;
    padding: 1.6rem 2.4rem;
    background: var(--clr-n1);
    h3 {
        font-size: var(--fz-h3);
        color: var(--clr-n1);
        font-weight: 700;
        font-family: var(--ff-en);
        letter-spacing: 0.1em;
    }
    ${MD1104} {
        transform: rotateY(-180deg);
    }
`;

export const CardBack = styled(CardFont)`
    padding: 4rem 0;
    background: linear-gradient(180deg, var(--gradient-card-bk));
    transform: rotateY(-180deg);
    ${MD1104} {
        transform: rotateY(0);
    }
`;

export const CardTag = styled.span`
    display: inline-block;
    background: var(--clr-g1);
    padding: 0.4rem 0.8rem;
    border-radius: 0.8rem;
    font-size: var(--fz-p3);
    font-weight: 700;
`;

export const CardTitle = styled.h4`
    color: ${(props) => props.clr || "var(--clr-n1)"};
    font-size: ${(props) => props.fz || "var(--fz-h4)"};
    font-weight: 700;
    text-shadow: ${(props) =>
        props.shadow ? "0 0 10px var(--shadow-purple)" : ""};
`;

export const CardSubTitle = styled.p`
    color: var(--clr-p3);
    font-size: var(--fz-p2);
    text-transform: none;
`;

export const DetailWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    span,
    a {
        display: inline-block;
        vertical-align: middle;
        font-size: var(--fz-p4);
        line-height: 2.5rem;
    }
    span {
        color: var(--clr-p2);
        letter-spacing: 0.1em;
        font-family: var(--ff-en);
    }
    a {
        color: var(--clr-p3);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        &:hover {
            text-decoration: underline;
            font-weight: 700;
            svg {
                transform: scale(1.1);
            }
        }
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: ${(props) => props.bg || "transparent"};
    border: 3px solid ${(props) => props.border || "transparent"};
    border-radius: inherit;
    padding: 3rem;
    text-align: center;
    height: 100%;
    gap: ${(props) => props.gap || 0};
    ${MD768} {
        ${(props) =>
            props.activity
                ? css`
                      flex-direction: row;
                      gap: 3rem;
                      text-align: left;
                      padding: 2rem 5rem;
                      &:hover {
                          border: 3px solid var(--clr-p1);
                          background: rgba(110, 110, 233, 0.1);
                      }
                      transition: all 0.5s;
                  `
                : ""}
    }
`;

export const TextWrap = styled.div``;

export const CardDetial = styled.p`
    color: var(--clr-n1);
    font-size: var(--fz-p2);
    white-space: pre-line;
    line-height: 2;
    span {
        color: var(--clr-g1);
    }
    small {
        display: block;
        text-align: center;
    }
`;

export const CardInfo = styled.div`
    color: var(--clr-n1);
    text-align: left;
    display: grid;
    width: 100%;
    gap: 1rem;
    h4 {
        font-size: var(--fz-h4);
    }
    h5 {
        font-size: var(--fz-h5);
        font-weight: 700;
        span {
            font-weight: 400;
        }
        span:last-child {
            color: var(--clr-g1);
        }
    }
    ${MD768} {
        margin-top: 2rem;
        h5 {
            br {
                content: " ";
            }
        }
    }
`;

export const Text = styled.p`
    font-size: ${(props) => props.fz || "var(--fz-p3)"};
    color: ${(props) => props.clr || "var(--clr-n2)"};
    font-weight: ${(props) => props.fw || 400};
    font-family: ${(props) => props.ff || "var(--ff-ch)"};
`;
