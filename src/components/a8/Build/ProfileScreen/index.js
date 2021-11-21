import React from "react";
import NavigationSidebar from "../NavigationSidebar"
import PostSummaryList from "../PostSummaryList/PostSummaryList";
import ProfileComponent from "./ProfileComponent";
import TweetList from "../TweetList/index"

const ProfileScreen = () => {
    return(
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-2 col-xl-2">
                <NavigationSidebar active="Profile"/>
            </div>
            <div class = "col-xxl-6 col-xl-6 col-lg-6 mb-3 col-md-10 col-sm-10 col-xs-10">
                <ProfileComponent/>
                <TweetList/>
            </div>
            <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
            <PostSummaryList title= "What's Happening"/>
            </div>  
        </div>
    )
};
export default ProfileScreen;