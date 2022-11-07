import styled, { css } from "styled-components";

export const NavbarContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 7.2rem;
    z-index: 10;
`;

export const NavFixedContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding-inline: 2rem;
    background: var(--clr-n5);
    z-index: 10;
`;

export const SignupLink = styled.a`
    margin-left: auto;
`;

export const NavLinkContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    right: 0;
    padding: 5.6rem 1.6rem;
    margin: auto;
    background: var(--clr-n5);
    transform: ${(props) =>
        props.open ? "translateY(0)" : "translateY(-100%)"};
    transition: all 0.2s;
    z-index: 5;
`;

export const NavLinkList = styled.ul`
    display: grid;
    gap: 3.2rem;
    li {
        width: 100%;
        text-align: center;
        font-size: var(--fz-nav);
    }
    a {
        color: var(--clr-n2);
    }

    li:last-child button {
        width: 100%;
    }
`;

export const Backdrop = styled.div`
    position: absolute;
    width: 100%;
    height: calc(100vh - 7.2rem);
    background: rgba(0, 0, 0, 0.25);
`;
