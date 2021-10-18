const PostItem = (post) => {
    return (`
   
    <div class="row  wd-border-solid wd-border-thin wd-border-darkgray wd-fonts-family">

        <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
            <div class="py-2 px-1" ><img class="wd-avatar" src=${post.avatar} width="54px" height="54px"/></div>
        </div>
                    
    <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 p-1">

    
    <div class="p-1 ms-4" > 
        <div class="row"> 
                    <div class="col-10">

                    <span class="p-1 wd-fonts-bold wd-fonts-white"> ${post.userName} <i class="px-1 fas fa-check-circle"></i> </span>
                    <span class="wd-fonts-lightgray"> ${post.handle}  &middot; ${post.time} </span>

                </div>

                    <div class="col-2" >
                    <i class= "fas fa-ellipsis-h text-muted"> </i> 
                    </div>

        </div>

    <div class="row">

            <div class="text-white p-1" > ${post.title}</div>
                <div class="wd-rounded-corners wd-border-solid wd-border-thin wd-border-darkgray">
            
            <div class= "border-bottom border-secondary" > 
                    <img class="wd-top-rounded wd-bottom-rounded" src=${post.image} width="100%" height="274px"/> 
            </div>
                        <div class="ms-2 text-white" > <span class="wd-fonts-bold"> ${post.image_title} </span></div>
                        <div class="ms-2 me-2 " > ${post.description} </div>
                        <div class="ms-2 mb-1 mt-1" > ${post.linkicon}  ${post.site_link} </div>
            </div>


            <div class="ms-2 py-3 d-flex justify-content-evenly" >
                <a class="wd-fonts-highlight" style="text-decoration: none;"> <i class="far fa-comment"></i> <span class="wd-margin-left"> ${post.comments} </span></a>
                <a class="wd-fonts-highlight ms-4" style="text-decoration: none;"> <i class="fa fa-retweet"></i> <span class="wd-margin-left"> ${post.retweet} </span></a>
                <a class="wd-fonts-highlight ms-4" style="text-decoration: none;"> <span class="wd-fg-color-red"> <i class="far fa-heart"></i> </span>  <span class="wd-margin-left">${post.likes} </span></a>
                <a class="wd-fonts-highlight px-4" style="text-decoration: none;"> <i class="fa fa-upload"></i> <span class="wd-margin-left"> </span></a>
            </div>

        </div>
            
           
  




</div>
</div>
</div>   
</div> 

`); }


export default PostItem;

/* <div class="wd-div-book">
<div class="d-flex">
<div><img class="rounded-circle" style="width:50px; height:50px;" src=${post.avatar}></div>
        <div>
            <div class="d-flex flex-row">
                <span class="d-inline-flex px-2">${post.userName}</span> 
                
                <span class="wd-txt-clr">@${post.handle} &#183; ${post.time} 
                <span class=" wd-circle wd-circle-align">&#183;&#183;&#183;</span>
                </span>
            </div>
            
            <div class="wd-txt-book">
                 ${post.title}
                </div>
            <div class="wd-book-pad">
                
                    <div class="wd-img-book">
                    <img class="card-img-top" src= "${post.image}" alt="Card image cap">
                    </div>
                    
                    <div class="wd-div-img-book">
                        
                            <span class="wd-book-txt" >${post.image_title}</span><br>
                            <span class="wd-topic-clr">${post.description}</span><br>
                        
                            <div class="fas fa-link"></div>
                            <span class="wd-topic-clr">${post.site_link}</span>
                    

                    </div>
            </div>
                    <div class="wd-btn-twitter bg-black">
                    <div class="far fa-comment "> <span >${post.comments}</span> </div> 
                    <div class="fas fa-retweet"><span class="">${post.retweet}</span></div> 
                    <div class="fas fa-heart"><span class="">${post.likes}</span></div> 
                    <div class="fas fa-upload"></div>
                    </div>
            </div>
            
            

        </div>
</div> */

/* <div class="row mt-2 border border-light pt-3">
<div class="col-1">
    <img class="d-block rounded-circle" style="width:50px; height:50px;" src="${post.avatar}">
</div>
<div class="col-11">
    <div class="row">
        <div class="col-10">
            <span>${post.userName}<i class="fas fa-check-circle"></i>
          
            <span class="text-muted">@${post.handle} &middot; ${post.time}</span> 
            </span>
            <p>${post.title}</p>
        </div>
         <div class="col-2">
            <i class=" fas fa-ellipsis-h  text-muted"></i>
        </div>
    </div>
    <div class="row">
        <div class="col-11 ">
            <div class="row border border-light ">
                <img src=${post.image} class="img-fluid">
                <span>${post.image_title}</span>
                <span>${post.description}</span>
                <div class="fas fa-link pt-1 pb-1">
                <span class="text-muted">${post.site_link}</span>
                </div>
               
            </div>
            <div class="row">
                <div class="bg-black d-flex justify-content-between">
                    <a href="#"><i class="icon-comment-alt icon far fa-comment ms-2"><span class="">${post.comments}</span></i></a>
                    <a href="#"><i class="icon-random icon fas fa-retweet ms-2"><span class="">${post.retweet}</span></i> </a>
                    <a href="#"><i class="icon-heart icon red fas fa-heart ms-2"><span class="">${post.likes}</span></i> </a>
                    <a href="#"><i class="fas fa-upload ms-2"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
</div> */