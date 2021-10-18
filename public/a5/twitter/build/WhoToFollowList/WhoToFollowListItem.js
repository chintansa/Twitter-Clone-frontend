

const WhoToFollowListItem = (who) =>{
    return(`
    
        <div class="row">
                    <div class="col-3 pb-3" >
                        <img src=${who.avatarIcon} alt="image"  class="img-fluid rounded-circle" >
                    </div>

                    <div class="col-6">
                        <div class="fw-bold"> ${who.userName} 
                        <i class="fas fa-check-circle"></i> 
                        </div> 
                        <div>@${who.handle}</div>
                    </div>

                    <div class="col-3"> 
                        <button type="button" class="mt-2 btn rounded-pill py-2 pt-2 bg-primary text-white">
                            Follow
                        </button>
                    </div>
                    
        </div>
         
     
    `);
}

export default WhoToFollowListItem;