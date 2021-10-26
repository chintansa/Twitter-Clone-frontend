/* eslint-disable no-undef */
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js"
import PostItemSummary from "../PostList/PostItemSummary.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">

        <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 d-none d-sm-block">
            ${NavigationSidebar("Home")}
        </div>
        
        <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 ">
            ${PostItemSummary()}

            <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
                ${PostSummaryList()}
            </div>


        </div>      

        </div>
    `);
})($);
