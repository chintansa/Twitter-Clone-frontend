/* eslint-disable no-unused-vars */

import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
    return (`
            <div class="list-group">
 
            <div class="list-group-item">
            <div class = "pb-3" >Who to Follow</div>
               
            <div class="list-item">
                ${
                    who.map(
                        item => {
                        return(WhoToFollowListItem(item));
                        }
                    ).join('')
                }
            </div>
            </div>
            </div>
`); }

export default WhoToFollowList;