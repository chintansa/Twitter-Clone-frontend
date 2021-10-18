import PostItem from "./PostItem.js";
import post from "./post.js";
const PostItemSummary = () => {
    return (`
            <div>
         
                ${
                    post.map(
                        post => {
                        return(PostItem(post));
                        }
                    ).join('')
                }
            </div>
            
`); }

export default PostItemSummary;