import React from 'react';
import PostSummaryListItem from "./PostSummaryListItem.js";
import post from "./post.json";
const PostSummaryList = () => {
    return (
        <>
            <div className ="list-group">
            <div className="list-group-item">
                {
                    post.map(
                        post => {
                        return ( 
                        <PostSummaryListItem post = {post} />
                        );
                    })
                }
            </div>
            </div>

        </>
); }

export default PostSummaryList;

