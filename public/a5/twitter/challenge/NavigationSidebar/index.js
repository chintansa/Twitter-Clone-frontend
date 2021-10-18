const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
                
                <a class="list-group-item list-group-item-action py-3 wd-clr-black"  href="#">
                    <div class="row">
                        <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                               <div class="fab fa-twitter"></div>
                        </div>

                    </div>

               </a>

               <a class="list-group-item list-group-item-action py-3 wd-clr-black ${active === 'Home' ? 'active':''} align-content-center"  href="../HomeScreen/HomeScreen.html">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <div class="fas fa-home"></div>
                    </div>
                    <div class="col-xxl-10 col-xl-8 d-none d-xl-inline-block">
                                Home
                    </div>

                </div>

            </a>

           <a class="list-group-item list-group-item-action py-3 wd-clr-black ${active === 'Explore' ? 'active':''} align-content-center"  href="../ExploreScreen/explore.html">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <i class="fa fa-hashtag center"></i>
                    </div>
                    <div class="col-xxl-10 col-xl-8 d-none d-xl-inline-block">
                                Explore
                    </div>

                </div>

            </a>
            <a class="list-group-item list-group-item-action py-3 wd-clr-black"  href="#">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <i class="fa fa-bell"></i>
                    </div>
                    <div class="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Notifications
                    </div>

                </div>

            </a>
            <a class="list-group-item list-group-item-action py-3 wd-clr-black"  href="#">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <i class="far fa-envelope"></i>
                    </div>
                    <div class="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Messages
                    </div>

                </div>

            </a>
            <a class="list-group-item list-group-item-action py-3 wd-clr-black"  href="#">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <i class="far fa-bookmark"></i>
                    </div>
                    <div class="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Bookmarks
                    </div>

                </div>

            </a>
            <a class="list-group-item list-group-item-action py-3 wd-clr-black align-content-center"  href="#">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <i class="fas fa-list-ul"></i>
                    </div>
                    <div class="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Lists
                    </div>

                </div>
            </a>                  
            <a class="list-group-item list-group-item-action py-3 wd-clr-black"  href="#">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Profile
                    </div>

                </div>

            </a>
            <a class="list-group-item list-group-item-action py-3 wd-clr-black"  href="#">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                       <span class="fas fa-ellipsis-h"></span>
                       
                    </div>
                    <div class="col-xxl-10 col-xl-8 d-none d-xl-block">
                                More
                    </div>

                </div>

            </a>


            <!-- continue the rest of the list -->
                 


            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
