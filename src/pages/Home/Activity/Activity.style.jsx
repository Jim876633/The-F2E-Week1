import styled from "styled-components";

export const ActivityContainer = styled.section`
    background: var(--clr-n4);
    padding: 8rem 1rem;
`;

export const TitleWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    h3 {
        color: var(--clr-n1);
        font-weight: 700;
        font-size: var(--fz-h3);
    }
`;

export const CardList = styled.div`
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;
