import React from "react";
import {Link} from "react-router-dom";
import Movies from "./Movies";
// import APIExamples from "./APIExamples";

const Practice = () => {
    return(
        <div>
            <h3>Practice</h3>
            
            <Link to="/a9/twitter/explore">
                Build
            </Link>
            {/* <APIExamples/> */}
            
             <Movies/>
           
        </div>

)
};

export default Practice;