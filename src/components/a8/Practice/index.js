import React from "react";
import {Link} from "react-router-dom";
import APIExamples from "./APIExamples";

const Practice = () => {
    return(
        <div>
            <h3>Practice</h3>
            
            <Link to="/a8/twitter/explore">
                Build
            </Link>
            <APIExamples/>


           
        </div>

)
};

export default Practice;