
const PostSummaryListItem = (post) =>{
    return(`
    
    <div class="row mt-2 border-bottom border-secondary pb-2 ">
    <div class="col-9">
            <span class="text-muted">${post.topic}</span>
            
            <div>
                <span class="text-white fw-bold">${post.userName} <i class="fas fa-check-circle"></i> <span class="text-muted"> - ${post.time}</span> </span>
            </div>

            <div>
            ${post.title}
            </div> 
    </div>

        <div class="col-3"> 
            <img class="img-thumbnail wd-img-right" src="${post.image}"/>
        </div>  

    </div>
    
         
     
    `);
}

export default PostSummaryListItem;