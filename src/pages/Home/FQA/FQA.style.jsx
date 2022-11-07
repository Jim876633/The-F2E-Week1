import styled from "styled-components";

export const FQAContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    background: var(--clr-n5);
    padding: 5rem 1.5rem;
    text-align: center;
`;

export const Title = styled.h3`
    color: var(--clr-n1);
    text-shadow: 0 0 10px var(--shadow-white);
    font-size: var(--fz-h3);
    letter-spacing: 0.1em;
    font-family: var(--ff-en);
    text-align: center;
`;

export const TagList = styled.div``;

export const Tag = styled.span`
    color: var(--clr-n2);
    font-size: var(--fz-p2);
`;
