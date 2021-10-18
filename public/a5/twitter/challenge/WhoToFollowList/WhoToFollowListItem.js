

const WhoToFollowListItem = (who) =>{
    return(`
    
    <div href="#" class="list-group-item list-group-item-action border-none">
    <div class="row">
        <div class="col-xxl-2 col-xl-2 col-lg-2">
            <div><img src=${who.avatarIcon} alt="image"  class="img-fluid rounded-circle" > </div>
        </div>
    
        <div class="col-xxl-7 col-xl-6 col-lg-6 text-nowrap">
            <div class="wd-fonts-bold">${who.userName} <i class="px-1 fas fa-check-circle"></i></div>
            <div class="wd-fonts-title">@${who.handle}</div>
        </div>
    
        <div class="col-xxl-3 col-xl-3 col-lg-3">
            <button type="button" class="btn text-center btn-primary btn-block rounded-pill">Follow</button>
        </div>
    
    </div>
    </div>
     
    `);
}

export default WhoToFollowListItem;

/* <a href="#" class="list-group-item list-group-item-action wd-border-none">
<div class="row">
    <div class="col-xxl-2 col-xl-2 col-lg-2">
        <div> <img class="wd-image-size rounded-circle" src=${who.avatarIcon}> </div>
    </div>

    <div class="col-xxl-7 col-xl-6 col-lg-6 text-nowrap">
        <div class="wd-fonts-bold">${who.userName} <i class="px-1 fas fa-check-circle"></i></div>
        <div class="wd-fonts-title">@${who.handle}</div>
    </div>

    <div class="col-xxl-3 col-xl-3 col-lg-3">
        <button type="button" class="btn text-center btn-primary btn-block rounded-pill">Follow</button>
    </div>

</div>
</a> */



// MediaEncryptedEvent <div class="row">
// <div class="col-3 pb-3" >
//     <img src=${who.avatarIcon} alt="image"  class="img-fluid rounded-circle" >
// </div>

// <div class="col-6">
//     <div class="fw-bold"> ${who.userName} 
//     <i class="fas fa-check-circle"></i> 
//     </div> 
//     <div>@${who.handle}</div>
// </div>

// <div class="col-3"> 
//     <button type="button" class="mt-2 btn rounded-pill py-2 pt-2 bg-primary text-white">
//         Follow
//     </button>
// </div>

// </div>
