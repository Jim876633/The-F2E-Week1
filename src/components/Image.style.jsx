import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";

/*======================================== */
/*Navbar */
/*======================================== */

import logoIcon from "../assets/images/logo.svg";
import closeIcon from "../assets/images/close.svg";
import menuIcon from "../assets/images/menu.svg";

/*======================================== */
/*banner */
/*======================================== */

import bannerIcon_1 from "../assets/images/banner-1.png";
import bannerIcon_2 from "../assets/images/banner-2.png";
import arrowLeft from "../assets/images/arrowLeft.svg";
import arrowRight from "../assets/images/arrowRight.svg";
import star from "../assets/images/star.svg";

/*======================================== */
/*Question */
/*======================================== */

import question1 from "../assets/images/question-1.svg";
import question2 from "../assets/images/question-2.svg";
import question3 from "../assets/images/question-3.svg";

import question1_lg from "../assets/images/question-1-d.svg";
import question2_lg from "../assets/images/question-2-d.svg";
import question3_lg from "../assets/images/question-3-d.svg";

/*======================================== */
/*Topic */
/*======================================== */

import leftHand from "../assets/images/lefthand.png";
import rightHand from "../assets/images/righthand.png";
import frontEnd from "../assets/images/frontend.svg";
import uiux from "../assets/images/uiux.svg";
import grid from "../assets/images/grid.svg";
import title from "../assets/images/title.svg";

/*======================================== */
/*Info */
/*======================================== */

import light from "../assets/images/light.svg";
import week1 from "../assets/images/info-1.png";
import week2 from "../assets/images/info-2.png";
import week3 from "../assets/images/info-3.png";
import lock from "../assets/images/lock.png";

/*======================================== */
/*Activity */
/*======================================== */

import dot1 from "../assets/images/dot-1.svg";
import dot2 from "../assets/images/dot-2.svg";
import activity1 from "../assets/images/activity-1.png";
import activity2 from "../assets/images/activity-2.png";
import activity3 from "../assets/images/activity-3.png";
import activity4 from "../assets/images/activity-4.png";

/*======================================== */
/*Prize */
/*======================================== */

import flag from "../assets/images/flag.svg";
import car from "../assets/images/car.svg";
import review from "../assets/images/note.png";
import prize from "../assets/images/money.png";

/*======================================== */
/*Sponsor */
/*======================================== */

import sponsor1 from "../assets/images/sponsor-1.svg";
import sponsor2 from "../assets/images/sponsor-2.svg";
import sponsor3 from "../assets/images/sponsor-3.svg";
import star2 from "../assets/images/star-2.svg";

export const ImageWrap = styled.div`
    height: ${(props) => (props.height ? props.height : "auto")};
    width: ${(props) => (props.width ? props.width : "auto")};
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    vertical-align: middle;
`;

export const ArrowDown = styled(AiFillCaretDown)`
    color: var(--clr-p1);
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 10px var(--shadow-purple));
    vertical-align: middle;
`;

export {
    logoIcon,
    closeIcon,
    menuIcon,
    bannerIcon_1,
    bannerIcon_2,
    arrowLeft,
    arrowRight,
    star,
    question1,
    question2,
    question3,
    question1_lg,
    question2_lg,
    question3_lg,
    leftHand,
    rightHand,
    frontEnd,
    uiux,
    grid,
    title,
    light,
    week1,
    week2,
    week3,
    lock,
    dot1,
    dot2,
    activity1,
    activity2,
    activity3,
    activity4,
    flag,
    car,
    review,
    prize,
    sponsor1,
    sponsor2,
    sponsor3,
    star2,
};
