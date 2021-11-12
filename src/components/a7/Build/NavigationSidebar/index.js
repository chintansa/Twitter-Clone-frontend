/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from "react-router-dom";

const NavigationSidebar = ( {
    active 
    }) => {
    return(
            <><div className="list-group">

            <Link to = "/a7" className="list-group-item list-group-item-action py-3 wd-clr-black" >
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <div className="fab fa-twitter"></div>
                    </div>

                </div>

            </Link>
          
            <Link to="/a7/twitter/home" className= {`list-group-item list-group-item-action py-3 wd-clr-black ${active === 'Home' ? 'active':''} align-content-center`}  >
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <div className="fas fa-home"></div>
                    </div>
                    <div className="col-xxl-10 col-xl-8 d-none d-xl-inline-block">
                        Home
                    </div>

                </div>

            </Link>

            <Link to= "/a7/twitter/explore" className={`list-group-item list-group-item-action py-3 wd-clr-black ${active === 'Explore' ? 'active':''} align-content-center`} >
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <i className="fa fa-hashtag center"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-8 d-none d-xl-inline-block">
                        Explore
                    </div>

                </div>

            </Link>
            <Link className="list-group-item list-group-item-action py-3 wd-clr-black" to="#">
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <i className="fa fa-bell"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                        Notifications
                    </div>

                </div>

            </Link>
            <Link className="list-group-item list-group-item-action py-3 wd-clr-black" to="#">
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <i className="far fa-envelope"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                        Messages
                    </div>

                </div>

            </Link>
            <Link className="list-group-item list-group-item-action py-3 wd-clr-black" to="#">
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <i className="far fa-bookmark"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                        Bookmarks
                    </div>

                </div>

            </Link>
            <Link className="list-group-item list-group-item-action py-3 wd-clr-black align-content-center" to="#">
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <i className="fas fa-list-ul"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                        Lists
                    </div>

                </div>
            </Link>
            <Link to="/a7/twitter/profile" className={`list-group-item list-group-item-action py-3 wd-clr-black ${active === 'Profile' ? 'active':''} align-content-center`} >
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                        Profile
                    </div>

                </div>

            </Link>
            
            <Link className="list-group-item list-group-item-action py-3 wd-clr-black" to="#">
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                    <i className="far fa-circle"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                        More
                    </div>

                </div>

            </Link>

        </div>
        <div className="d-grid mt-3">
                <Link to="tweet.html"
                    className="btn btn-primary btn-block rounded-pill">
                    Tweet</Link>
        </div>
            
            </>
    );
}
export default NavigationSidebar;
<i className="fas fa-ellipsis-h"></i>