import styled from "styled-components";
import { MD980 } from "../../constants/style";

export const NavbarContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 7.2rem;
    z-index: 10;
    ${MD980} {
        position: relative;
        display: flex;
        padding-inline: 5vw;
        background: var(--clr-n5);
        height: 10rem;
    }
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
    ${MD980} {
        padding-inline: 0;
        background: transparent;
    }
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
    ${MD980} {
        position: relative;
        top: 0;
        margin: 0;
        padding: 0;
        z-index: 10;
        transform: translateY(0);
        background: transparent;
    }
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
        word-break: keep-all;
    }

    li:last-child button {
        width: 100%;
        ${MD980} {
            width: auto;
        }
    }
    ${MD980} {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        li:last-child {
            margin-left: 2rem;
        }
        li:not(li:last-child):hover a {
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
        }
    }
`;

export const Backdrop = styled.div`
    position: absolute;
    width: 100%;
    height: calc(100vh - 7.2rem);
    background: rgba(0, 0, 0, 0.25);
    ${MD980} {
        display: none;
    }
`;
