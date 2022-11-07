import React from "react";
import { FooterContainer } from "./Footer.style";

const Footer = () => {
    return (
        <FooterContainer>
            <p>
                Copyrignt &copy; 2022 Code :{" "}
                <a href="https://github.com/Jim876633">Jim Huang.</a> Design :{" "}
                <a href="https://2022.thef2e.com/users/12061549261447630282">
                    Jenny Wu
                </a>
            </p>
        </FooterContainer>
    );
};

export default Footer;
