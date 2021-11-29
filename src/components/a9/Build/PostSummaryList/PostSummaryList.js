import React from 'react';
import PostSummaryListItem from "./PostSummaryListItem.js";
import post from "./post.json";
const PostSummaryList = ({title}) => {
    return (
        <>
            <div className = "list-group">
            {
                title &&
                <li className="list-group-item">
                    <h5 className="fw-bolder">{title}</h5>
                </li>
            }
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

