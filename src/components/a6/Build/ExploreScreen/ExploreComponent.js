/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import './ExploreScreen.css';
import assests from '../../assets/starship.jpg';

const ExploreComponent = () => {
    return(
<>
            <div className="row wd-search-align ms-2">
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-sm-9 col-md-9 rounded-pill bg-white">

                <div className="wd-search input-form bg-white">
                    <i className="input-group-text bg-white"><i className="fas fa-search"></i></i>
                    <input type="text" className="bg-white form-control" placeholder="Search Twitter" /> 
                </div>
                
            </div>

            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 me-1">
                <a className="fas fa-cog fa-2x " href="#"></a>
            </div>

           </div>
           <div className="nav nav-tabs flex-md-nowwrap pt-3 " >
                    <li className="nav-item">
                            <a href="#" className="nav-link active"> <span className="text-white">For you</span></a>
                    </li>
                    <li className="nav-item">
                            <a href="#" className="nav-link ">Trending</a>
                    </li>
                    <li className="nav-item">
                            <a href="#" className="nav-link ">COVID-19</a>
                    </li>
                    <li className="nav-item">
                            <a href="#" className="nav-link ">News</a>
                    </li>
                    <li className="nav-item">
                            <a href="#" className="nav-link d-none d-lg-block">Sports</a>
                    </li>
                    <li className="nav-item">
                            <a href="#" className="nav-link d-none d-xxl-block">Entertainment</a>
                    </li>

            </div>
            <div className="card mt-2 mb-2">
                <img className="card-img-top" src= {assests} alt="starship image" />
                <div className="card-body text-white wd-text-large rgba-black-light p-2 wd-bottom-left wd-fonts-bold "> 
                    SpaceX's Starship 
                </div>
             </div>  

             <div>
                   <PostSummaryList />
             </div>
        </> 
    );
}
export default ExploreComponent;

