import styled from "styled-components";

export const FooterContainer = styled.footer`
    background: var(--clr-n5);
    padding-block: 2rem;
    color: var(--clr-n1);
    font-size: var(--fz-p4);
    text-align: center;
    p {
        font-size: var(--fz-p4);
        font-family: "Montserrat", sans-serif;
        text-transform: capitalize;
    }
    a {
        color: var(--clr-p1);
        font-family: "Montserrat", sans-serif;
        text-decoration: underline;
        text-transform: capitalize;
    }
`;
