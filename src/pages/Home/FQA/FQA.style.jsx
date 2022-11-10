import styled, { css } from "styled-components";

export const FQAContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    background: var(--clr-n5);
    padding: 5rem 1.5rem;
    text-align: center;
`;

export const FQACardWrap = styled.div`
    width: min(90%, 80rem);
`;

export const Title = styled.h3`
    color: var(--clr-n1);
    text-shadow: 0 0 10px var(--shadow-white);
    font-size: var(--fz-h3);
    letter-spacing: 0.1em;
    font-family: var(--ff-en);
    text-align: center;
`;

export const TagList = styled.div`
    display: flex;
    position: relative;
    width: 90%;
    gap: 2rem;
    padding-block: 1rem;
    overflow-x: scroll;
    user-select: none;

    &::-webkit-scrollbar {
        background: transparent;
        height: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--clr-p1);
        border-radius: var(--br-button);
    }
`;

export const TagButton = styled.button`
    color: var(--clr-n2);
    font-size: var(--fz-p2);
    flex-shrink: 0;
    ${(props) =>
        props.active
            ? css`
                  color: var(--clr-n1);
                  text-shadow: 0 0 10px var(--shadow-white);
                  &:after {
                      content: "";
                      display: block;
                      width: 1.5rem;
                      height: 0.4rem;
                      margin: 0.5rem auto 0;
                      border-radius: var(--br-button);
                      background: var(--clr-g1);
                      box-shadow: 0 0 10px var(--shadow-green);
                  }
              `
            : ""}
`;
