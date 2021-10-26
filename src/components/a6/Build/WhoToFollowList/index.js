/* eslint-disable no-unused-vars */
import React from 'react';

import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.json";
const WhoToFollowList = () => {
    return (
        <>
            <div className ="list-group">
 
            <div className ="list-group-item">
            <div className = "pb-3" >Who to Follow</div>
               
            <div className ="list-item">
                {
                    who.map(who => {
                        return(
                            <WhoToFollowListItem who = {who}/>
                        );
                    })
                }

            </div>
            </div>
            </div>
        </>
); }

export default WhoToFollowList;