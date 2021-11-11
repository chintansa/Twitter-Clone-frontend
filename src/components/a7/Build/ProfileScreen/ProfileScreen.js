import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList/PostSummaryList";
import Profile from "../profile/Profile";
import TweetList from "../TweetList/index"
const ProfileScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="Profile"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">
             <Profile/>
             <TweetList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList/>
            </div>
        </div>
    );
};
export default ProfileScreen;