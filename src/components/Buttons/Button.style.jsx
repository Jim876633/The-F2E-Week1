import styled, { css } from "styled-components";
import { MD768, MD980 } from "../../constants/style";

export const Button = styled.button`
    padding: 1rem 2rem;
    border: 1px solid var(--clr-n1);
    border-radius: var(--br-button);
    color: var(--clr-n1);
    font-size: var(--fz-nav);
    ${(props) =>
        props.lg
            ? css`
                  background: var(--clr-y1);
                  color: var(--clr-n6);
                  font-size: var(--fz-p2);
                  font-weight: 700;
                  letter-spacing: 0.02em;
                  padding: 0.8rem 4rem;
                  line-height: var(--lh-p1);
                  border: none;
              `
            : ""};
    ${MD768} {
        &:hover {
            background: var(--shadow-green);
            color: var(--clr-g1);
            border: 1px solid var(--clr-g1);
            box-shadow: 0 0 10px var(--shadow-green);
            ${(props) =>
                props.lg
                    ? css`
                          background: var(--clr-y2);
                          color: var(--clr-n5);
                          border: none;
                          box-shadow: 0 0 10px var(--shadow-yellow);
                      `
                    : ""}
        }
    }
    ${MD980} {
        ${(props) =>
            props.signup
                ? css`
                      display: none;
                  `
                : ""}
    }
`;

export const MenuButton = styled.button`
    width: 3rem;
    height: 3rem;
    flex-shrink: 0;
    margin-right: 2.5rem;
    ${MD980} {
        display: none;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 2rem;
    right: 2rem;
    ${MD980} {
        display: none;
    }
`;
