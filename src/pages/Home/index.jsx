import React from "react";
import Banner from "./Banner/Banner";
import Question from "./Question/Question";
import Topic from "./Topic/Topic";
import Info from "./Info/Info";
import Activity from "./Activity/Activity";
import Prize from "./Prize/Prize";
import FQA from "./FQA/FQA";
import Sponsors from "./Sponsors/Sponsors";
const Home = () => {
    return (
        <main>
            <Banner />
            <Question />
            <Topic />
            <Info />
            <Activity />
            <Prize />
            <FQA />
            <Sponsors />
        </main>
    );
};

export default Home;
