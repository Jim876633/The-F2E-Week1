import { useState } from "react";
import {
    NavbarContainer,
    NavFixedContainer,
    SignupLink,
    NavLinkContainer,
    NavLinkList,
    Backdrop,
} from "./Navbar.style";
import { LoginButton, SignupButton } from "../Buttons/Button";
import { MenuButton, CloseButton } from "../Buttons/Button.style";
import {
    ImageWrap,
    Image,
    logoIcon,
    closeIcon,
    menuIcon,
} from "../Image.style";

const links = ["關卡資訊", "攻略資源", "求職專區", "登入"];

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const linkElements = links.map((title) => (
        <li key={title}>
            <a href="/">
                {title === "登入" ? <LoginButton>{title}</LoginButton> : title}
            </a>
        </li>
    ));

    const toggleHandler = () => {
        setToggleMenu((pre) => !pre);
    };

    document.body.style.overflow = toggleMenu ? "hidden" : "auto";

    return (
        <NavbarContainer>
            <NavFixedContainer>
                <MenuButton title="menu" type="button" onClick={toggleHandler}>
                    <Image src={menuIcon} alt="menu" />
                </MenuButton>
                <ImageWrap height="1.3rem">
                    <Image src={logoIcon} alt="logo" />
                </ImageWrap>
                <SignupLink href="/">
                    <SignupButton>立即報名</SignupButton>
                </SignupLink>
            </NavFixedContainer>
            <NavLinkContainer open={toggleMenu}>
                <NavLinkList>{linkElements}</NavLinkList>
                <CloseButton
                    title="close"
                    type="button"
                    onClick={toggleHandler}
                >
                    <Image src={closeIcon} alt="close" />
                </CloseButton>
            </NavLinkContainer>
            {toggleMenu ? <Backdrop /> : ""}
        </NavbarContainer>
    );
};

export default Navbar;
