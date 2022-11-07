import { createGlobalStyle } from "styled-components";
import monument from "./assets/fonts/PPMonumentExtended-Regular.otf";
import pilot from "./assets/fonts/pilotcommand1_2ital.ttf";

const GlobalStyle = createGlobalStyle`
    :root{
        /*======================================== */
        /*color */
        /*======================================== */
        --clr-p1:#9DA4FF;
        --clr-p2: #C4C8FF;
        --clr-p3: #6E77E9;
        --clr-g1: #55FFAD;
        --clr-y1: #FFE34E;
        --clr-y2:#FFF385;
        --clr-n1: #FFFFFF;
        --clr-n2:#858993;
        --clr-n3:#151F3F;
        --clr-n4: #0e1835;
        --clr-n5:#06102B;
        --clr-n6: #000000;

        /*======================================== */
        /*linear gradient */
        /*======================================== */
        --gradient-card-bk:  #9DA4FF,#6E77E9;;
        --gradient-decoration:  #9DA4FF,#55FFAD;
        --gradient-card-stock:#313A65,#00313A65;

        /*======================================== */
        /*shadow */
        /*======================================== */
        --shadow-white: rgba(255,255,255,0.6);
        --shadow-green: rgba(85,255,173,0.6);
        --shadow-purple: rgba(157,164,255,0.6);
        --shadow-yellow: rgba(255,243,133,0.6);

        /*======================================== */
        /*fomt family */
        /*======================================== */
        --ff-ch:'Noto Sans TC', sans-serif;
        --ff-en: monument;
        --ff-p: pilot;

        /*======================================== */
        /*fomt size */
        /*======================================== */
        --fz-h1:4.2rem;
        --fz-h2:4rem;
        --fz-h3:3.2rem;
        --fz-h4:2.4rem;
        --fz-h5:2rem;
        --fz-title: 1.6rem;
        --fz-sub:1.4rem;
        --fz-p1: 2.4rem;
        --fz-p2: 2rem;
        --fz-p3:1.6rem;
        --fz-p4: 1.4rem;
        --fz-caption: 1.2rem;
        --fz-nav: 1.6rem;

        /*======================================== */
        /*line height */
        /*======================================== */
        --lh-h1:7.2rem;
        --lh-h2:6rem;
        --lh-h3:4.8rem;
        --lh-h4:3.6rem;
        --lh-h5: 2.8rem;
        --lh-title: 2rem;
        --lh-sub:1.8rem;
        --lh-p1: 3.6rem;
        --lh-p2: 2.8rem;
        --lh-p3:2rem;
        --lh-p4: 1.8rem;
        --lh-caption: 1.6rem;

        /*======================================== */
        /*border radius */
        /*======================================== */
        --br-card: 3.2rem;
        --br-button: 10rem;
    }
    @font-face {
        font-family: monument;
        src: url(${monument});
    }
    @font-face {
        font-family: pilot;
        src: url(${pilot});
    }
    html{
        font-size: 62.5%;
    }
    *{
        margin:0;
        padding:0;
        background: var(--linear-card-stock);
        box-sizing: border-box;
        font-family: var(--ff-ch);
        font-weight: 400;
        text-transform: uppercase;
    }
    body{

    }
    button{
        cursor: pointer;
        border:none;
        background:  transparent
    }
    a{
        text-decoration: none;
    }
    li{
        list-style: none;
    }

`;

export default GlobalStyle;
