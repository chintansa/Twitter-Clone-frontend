import PostItem from "./PostItem.js";
import post from "./post.json";
const PostItemSummary = () => {
    return (
            <div>
         
                {
                    post.map(
                        post => {
                        return(
                            <PostItem post= {post}/>
                            );
                        })
                }
            </div>
            
); }

export default PostItemSummary;