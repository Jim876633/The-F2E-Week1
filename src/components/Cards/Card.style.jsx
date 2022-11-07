import styled, { css } from "styled-components";

export const CardWrap = styled.div`
    width: 100%;
    border-radius: var(--br-card);
    overflow: hidden;
    ${(props) =>
        props.bgLinear
            ? css`
                  background: linear-gradient(90deg, var(--gradient-card-stock))
                      border-box;
                  border: 3px solid transparent;
              `
            : ""}
`;
export const CardBack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
    background: var(--clr-n1);
    padding: 1.6rem 2.4rem;
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
    span {
        display: inline-block;
        vertical-align: middle;
        font-size: var(--fz-p4);
        line-height: 2.5rem;
    }
    span:first-child {
        color: var(--clr-p2);
        letter-spacing: 0.1em;
        font-family: var(--ff-en);
    }
    span:last-child {
        color: var(--clr-p3);
        font-weight: 700;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props) => props.bg || "transparent"};
    border: 3px solid ${(props) => props.border || "transparent"};
    border-radius: inherit;
    padding: 3rem;
    text-align: center;
    gap: ${(props) => props.gap || 0};
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
`;

export const CardInfo = styled.div`
    color: var(--clr-n1);
    text-align: left;
    display: grid;
    gap: 1rem;
    h4 {
        font-size: var(--fz-h4);
    }
    h5 {
        font-size: var(--fz-h5);
        span {
            color: var(--clr-g1);
        }
    }
`;

export const Text = styled.p`
    font-size: ${(props) => props.fz || "var(--fz-p3)"};
    color: ${(props) => props.clr || "var(--clr-n2)"};
    font-weight: ${(props) => props.fw || 400};
    font-family: ${(props) => props.ff || "var(--ff-ch)"};
`;
