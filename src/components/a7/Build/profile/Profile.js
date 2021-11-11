/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';

const selectAllProfile = (state) => state.profile.profile;

const Profile = () => {
const profile = useSelector(selectAllProfile);
return(

<div className="" > 

<div className="row ">
    <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
            <Link href="#">
               Back
            </Link>      
    </div>
    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 px-5">
            <div className="row fw-bold fs-5">{profile.firstName}</div>
            <div className="row fs-6 text-muted">5188 tweets</div>  
    </div>

 
</div>

<div className='pb-3 row'>

<div className="position-relative pb-5">
    <div className="row">
        <img src= {profile.bannerPicture} />
        
        <div className='position-absolute' style={{top:"270px", left : "5px"}}>
            <img className="img-fluid rounded-circle bg-white" src={profile.profilePicture} width={'100px'} height={"100px"}/>    
        </div>  
    </div> 
</div>
    

</div>


<div className="row px-4">
 <div className='fs-5'>
        <div className="row fw-bold fs-5">{profile.firstName}</div>
        <div className="row fs-6 text-muted">{profile.handle}</div>  
 </div>

</div>

<div className="row px-4 py-2">
   {profile.bio}
</div>

<div className="row px-4 py-2 text-muted">
   
    <div className="col px-4 py-2">
        {profile.location} 
    </div>
   
    <div className="col px-4 py-2">
        Born  {profile.dateOfBirth}
    </div>

    <div className="col px-4 py-2">
        Joined {profile.dateJoined}
    </div>
</div>



<div className="row px-2 py-2">
    <div>
        <span className='col px-1'><span className='fw-bold'>{profile.followingCount}</span> <span className='text-muted'>Following</span> </span>
        <span className='col px-2'><span className='fw-bold'>{profile.followersCount}</span> <span className='text-muted'>Followers</span> </span>
    </div>
</div>



</div>

);


}


export default Profile;