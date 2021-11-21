/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "../HomeScreen/HomeScreen.css"

const PostItem = ({post}) => {
    return (
   <>
    <div className="row border-bottom border-secondary wd-fonts-family">
        <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
            <div className="py-2 px-1" ><img className="wd-avatar" src={post.avatar} width="54px" height="54px"/></div>
        </div>
                    
    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 p-1">

    
        <div className="p-1 ms-4" > 

                <span className="p-1 wd-fonts-bold wd-fonts-white"> {post.userName} <i className="px-1 fas fa-check-circle"></i> </span>
                <span className="wd-fonts-lightgray"> {post.handle}  &middot; {post.time} </span>
                
                <div className="text-white p-1" >{post.title}</div>
                <div className="wd-rounded-corners wd-border-solid wd-border-thin wd-border-darkgray">
                    <div> 
                    <img className="wd-top-rounded  wd-border-solid wd-border-thin wd-border-darkgray" src={post.image} width="100%" height="274px"/> 
                    </div>
                        <div className="ms-2 text-white pt-2" > <span className="wd-fonts-bold"> {post.image_title} </span></div>
                        <div className="ms-2 me-2 pt-2" > {post.description} </div>
                        <div className="ms-2 mb-1 mt-1" > {post.linkicon}  {post.site_link} </div>
                </div>
        </div>        
            
            <div className="ms-2 py-3 d-flex justify-content-evenly align-items-start" >
                <a className="wd-fonts-highlight text-decoration-none" > <i className="far fa-comment"></i> <span className="wd-margin-left"> {post.comments} </span></a>
                <a className="wd-fonts-highlight ms-4 text-decoration-none" > <i className="fa fa-retweet"></i> <span className="wd-margin-left"> {post.retweet} </span></a>
                <a className="wd-fonts-highlight ms-4 text-decoration-none" > <span className="wd-fg-color-red"> <i className="far fa-heart"></i> </span>  <span className="wd-margin-left">{post.likes}</span></a>
                <a className="wd-fonts-highlight px-4 text-decoration-none" > <i className="fa fa-upload"></i> <span className="wd-margin-left"> </span></a>
            </div>
  





</div>
</div>   
</>

); }


export default PostItem;

/* <div className="wd-div-book">
<div className="d-flex">
<div><img className="rounded-circle" style="width:50px; height:50px;" src={post.avatar}></div>
        <div>
            <div className="d-flex flex-row">
                <span className="d-inline-flex px-2">{post.userName}</span> 
                
                <span className="wd-txt-clr">@{post.handle} &#183; {post.time} 
                <span className=" wd-circle wd-circle-align">&#183;&#183;&#183;</span>
                </span>
            </div>
            
            <div className="wd-txt-book">
                 {post.title}
                </div>
            <div className="wd-book-pad">
                
                    <div className="wd-img-book">
                    <img className="card-img-top" src= "{post.image}" alt="Card image cap">
                    </div>
                    
                    <div className="wd-div-img-book">
                        
                            <span className="wd-book-txt" >{post.image_title}</span><br>
                            <span className="wd-topic-clr">{post.description}</span><br>
                        
                            <div className="fas fa-link"></div>
                            <span className="wd-topic-clr">{post.site_link}</span>
                    

                    </div>
            </div>
                    <div className="wd-btn-twitter bg-black">
                    <div className="far fa-comment "> <span >{post.comments}</span> </div> 
                    <div className="fas fa-retweet"><span className="">{post.retweet}</span></div> 
                    <div className="fas fa-heart"><span className="">{post.likes}</span></div> 
                    <div className="fas fa-upload"></div>
                    </div>
            </div>
            
            

        </div>
</div> 

/* <div className="row mt-2 border border-light pt-3">
<div className="col-1">
    <img className="d-block rounded-circle" style="width:50px; height:50px;" src="{post.avatar}">
</div>
<div className="col-11">
    <div className="row">
        <div className="col-10">
            <span>{post.userName}<i className="fas fa-check-circle"></i>
          
            <span className="text-muted">@{post.handle} &middot; {post.time}</span> 
            </span>
            <p>{post.title}</p>
        </div>
         <div className="col-2">
            <i className=" fas fa-ellipsis-h  text-muted"></i>
        </div>
    </div>
    <div className="row">
        <div className="col-11 ">
            <div className="row border border-light ">
                <img src={post.image} className="img-fluid">
                <span>{post.image_title}</span>
                <span>{post.description}</span>
                <div className="fas fa-link pt-1 pb-1">
                <span className="text-muted">{post.site_link}</span>
                </div>
               
            </div>
            <div className="row">
                <div className="bg-black d-flex justify-content-between">
                    <a href="#"><i className="icon-comment-alt icon far fa-comment ms-2"><span className="">{post.comments}</span></i></a>
                    <a href="#"><i className="icon-random icon fas fa-retweet ms-2"><span className="">{post.retweet}</span></i> </a>
                    <a href="#"><i className="icon-heart icon red fas fa-heart ms-2"><span className="">{post.likes}</span></i> </a>
                    <a href="#"><i className="fas fa-upload ms-2"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
</div> 



*/