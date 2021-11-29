/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "../ExploreScreen/ExploreScreen.css"
const PostSummaryListItem = ({post}) =>{
    return(
    
    <div className="row mt-2 border-bottom border-secondary pb-2 ">
    <div className="col-9">
            <span className="text-muted"> {post.topic}</span>
            
            <div>
                <span className="text-white fw-bold"> 

                {post.userName} 

                <i className="fas fa-check-circle px-1"></i> 

                    <span className="text-muted"> 

                    - {post.time}

                    </span> 

                </span>
            </div>

            <div>
                {post.title}
            </div> 
    </div>

        <div className="col-3"> 
            <img className="img-thumbnail wd-img-right" src= {post.image}/>
        </div>  

    </div>
    
         
     
    );
}

export default PostSummaryListItem;