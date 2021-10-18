import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row wd-search-align ms-2">
            <div class="col-xxl-9 col-xl-9 col-lg-9 col-sm-9 col-md-9 rounded-pill bg-white">

                <div class="wd-search input-form bg-white">
                    <i class="input-group-text bg-white"><i class="fas fa-search"></i></i>
                    <input type="text" class="bg-white form-control" placeholder="Search Twitter">
                </div>
                
            </div>

            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 me-1">
                <a class="fas fa-cog fa-2x " href="#"></a>
            </div>

           </div>
           <div class="nav nav-tabs flex-md-nowwrap pt-3 " >
                    <li class="nav-item">
                            <a href="#" class="nav-link active"> <span class="text-white">For you</span></a>
                    </li>
                    <li class="nav-item">
                            <a href="#" class="nav-link ">Trending</a>
                    </li>
                    <li class="nav-item">
                            <a href="#" class="nav-link ">COVID-19</a>
                    </li>
                    <li class="nav-item">
                            <a href="#" class="nav-link ">News</a>
                    </li>
                    <li class="nav-item">
                            <a href="#" class="nav-link d-none d-lg-block">Sports</a>
                    </li>
                    <li class="nav-item">
                            <a href="#" class="nav-link d-none d-xxl-block">Entertainment</a>
                    </li>

            </div>
            <div class="card mt-2 mb-2">
                <img class="card-img-top" src="../../../assets/starship.jpg" alt="starship image">
                <div class="card-body text-white wd-text-large rgba-black-light p-2 wd-bottom-left wd-fonts-bold "> 
                    SpaceX's Starship 
                </div>
             </div>  

             <div>
                     ${PostSummaryList()}
             </div>
    `);
}
export default ExploreComponent;

