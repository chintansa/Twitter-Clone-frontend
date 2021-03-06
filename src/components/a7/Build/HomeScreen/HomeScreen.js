/* eslint-disable no-undef */

import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList/PostSummaryList";
import TweetList from "../TweetList/index"
import Whatshappening from '../WhatsHappening/index'
const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="Home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{"position": "relative"}}>
            <Whatshappening/>
            <TweetList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList title= "What's Happening"/>
            </div>
        </div>
    );
};
export default HomeScreen;