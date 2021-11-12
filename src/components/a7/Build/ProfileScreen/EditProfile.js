/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";

const EditProfile = () =>{
    const profileData = useSelector((state) => state.profile.profile)

    let[newInput, setProfileData] = useState({})
    const dispatch = useDispatch();
    const saveChanges = () => {
        dispatch({type:'save', newInput})
    }

    return(
        <>
            <div className = "row">
                <div className = "col-2">
                    <Link to="/a7/twitter/profile"><i className="fas fa-times" aria-hidden="true"></i></Link>
                </div>
                <div className = "col-8">
                    <div className = "row pb-0 mb-0">
                        <h3>Edit Profile</h3>
                    </div>
                </div>
                <div className="col-2 mb-2">
                    <button className="btn btn-light rounded-pill wd-save-btn" onClick={saveChanges}>
                       <Link to="/a7/twitter/profile"> <strong>Save</strong> </Link>
                    </button>
                </div>
            </div>

            <div className= "wd-image-holder">
                <div className="row wd-bannerImage">
                    <img src={profileData.bannerPicture} />
                </div>

                <div className = "row wd-avatar-div px-2">
                        <img src={profileData.profilePicture} className="rounded-circle wd-profile-image-edit ms-3 img-fluid bg-white "/>
                </div>
            </div>
            <div className = "wd-details-form">
                <ul className="list-group">

                    <li className="wd-border-top list-group-item wd-item-list">  
                        <label>Name</label>  
                        <input type="text" placeholder= "Name" defaultValue={profileData.firstName + " " + profileData.lastName} className="form-control " name="name"
                        onChange = {e => setProfileData((value) => ({...value,[e.target.name] : e.target.value}))}/>
                    </li>
                    <br/>
                    <li className="list-group-item wd-item-list">
                        <label>Bio</label>
                        <textarea defaultValue={profileData.bio} className="form-control" name = "bio"
                        onChange = {e => setProfileData((value) =>({...value,[e.target.name]: e.target.value}))}> 
                        </textarea>
                    </li>
                    <br/>  
                    <li className="list-group-item wd-item-list">
                        <label>Location</label>
                        <input type="text" placeholder="Location" defaultValue={profileData.location} className="form-control " name = "location"
                        onChange = {e => setProfileData((value) =>({...value,[e.target.name] : e.target.value}))}/>
                    </li>
                    <br/>  
                    <li className="list-group-item wd-item-list">
                        <label>Website</label>
                        <input type="text" placeholder="Website" defaultValue={profileData.website} className="form-control" name = "website"
                        onChange = {e => setProfileData((value) =>({...value,[e.target.name] : e.target.value}))}/>
                    </li>
                    <br/>      
                    <li className="list-group-item wd-border-btm wd-item-list">
                        <label>Birth Date</label>
                        <input type="text" placeholder="DOB" defaultValue={profileData.dateOfBirth} className="form-control  "  name = "dateOfBirth"
                        onChange = {e => setProfileData((value) =>({...value,[e.target.name] : e.target.value.toString()}))}/>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default EditProfile;