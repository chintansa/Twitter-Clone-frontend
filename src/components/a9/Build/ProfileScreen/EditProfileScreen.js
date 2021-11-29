import React from "react";
import NavigationSidebar from "../NavigationSidebar/index"
import PostSummaryList from "../PostSummaryList/PostSummaryList";
import EditProfile from "./EditProfile";

const EditProfileScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-2 col-xl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className = "col-xxl-6 col-xl-6 col-lg-6 mb-3 col-md-10 col-sm-10 col-xs-10">
                <EditProfile/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                <PostSummaryList title= "What's Happening"/>
            </div>  
        </div>
    )
};
export default EditProfileScreen;