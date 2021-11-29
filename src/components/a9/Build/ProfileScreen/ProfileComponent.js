/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect} from 'react';
import {useSelector,useDispatch,} from "react-redux";
import { Link, Route } from "react-router-dom";
import EditProfileScreen from "./EditProfileScreen";
import './profile.css';
import {fetchProfile} from "../../../../services/profileService";

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile.profile);
    const dispatch = useDispatch();
    useEffect(() => fetchProfile(dispatch), []) 
return(
        <>
        <div className="pb-5">
            <div className = "row">
                    <div className = "col-2">
                        <Link to="/a9/twitter/home">
                        <i className="fa fa-arrow-left text-muted" aria-hidden="true"></i>
                        </Link>
                        
                    </div>
                    <div className = "col-10">
                        <div className = "row pb-0 mb-0">
                            <h5>{profile.firstName + " " + profile.lastName}</h5>
                        <div className = "row pt-0 mt-0 text-muted">
                            <p>5196 Tweets</p>
                        </div>
                        </div>
                    </div>
            </div>

                <div className= "wd-image-holder">
                    <div className="row wd-bannerImage">
                        <img src={profile.bannerPicture}/>
                    </div>
 
                    <div className = "row">
                        <div className = "col-8 wd-avatar-div">
                            <img src= {profile.profilePicture} className="rounded-circle ms-3 wd-profile-image img-fluid bg-white" />
                        </div>
                        <div className = "col-4 align-items-center">
                            <Link to="/a9/twitter/profile/editProfile">
                                <button className="btn btn-primary rounded-pill mt-3 bg-black">
                                    <strong>Edit Profile</strong>
                                </button>
                            </Link>
                            <Route path={"/a9/twitter/profile/editProfile"}>
                               <EditProfileScreen/>
                            </Route>
                        </div>
                    </div>
                </div>

                <div className="py-1">
                    <div className = "row">
                        <h5>{profile.firstName + " " + profile.lastName}</h5>
                    </div>
                    <div className = "row">
                        <p>@{profile.handle}</p>
                    </div>
                    <div className = "row">
                        <p>{profile.bio}</p>
                    </div>
                    <div className = "row">
                        <div className = "col-3">
                        <i class="fas fa-map-marker-alt text-muted"></i>
                            <span> {profile.location}</span>
                        </div>
                        <div className = "col-4">
                            <i class="fas fa-globe-asia"></i>
                            <span> Born </span>
                            <span> {profile.dateOfBirth}</span>
                        </div>
                        <div className = "col-4">
                            <i className="fa fa-calendar" aria-hidden="true"></i>
                            <span> {profile.dateJoined}</span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className = "col-3">
                            <span>
                                <span className="fw-bold">{profile.followingCount}</span>
                                <span className="text-muted"> Following</span>
                            </span>
                        </div>
                        <div className="col-9">
                            <span>
                                <span className="fw-bold">{profile.followersCount}</span>
                                <span className="text-muted"> Followers</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileComponent;