/* eslint-disable no-undef */
import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar("Explore")}
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-9 col-sm-10">
             ${ExploreComponent()}
        </div>
           
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
           ${WhoToFollowList()}
        </div>

      
        </div>
    `);
})($);

 
 