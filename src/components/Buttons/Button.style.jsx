import styled, { css } from "styled-components";

export const Button = styled.button`
    padding: 1rem 1.5rem;
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
              `
            : ""};
`;

export const MenuButton = styled.button`
    width: 3rem;
    height: 3rem;
    flex-shrink: 0;
    margin-right: 2.5rem;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 2rem;
    right: 2rem;
`;
