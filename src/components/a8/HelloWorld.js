import React from "react";
import { Link } from 'react-router-dom'


const HelloWorld = () => {
    return(
       <div>
            <h1>Hello World!</h1>
          <Link to="/a8/practice">
              Practice
          </Link> |
          <Link to="/a8/twitter/home">
              Build
          </Link>

          

       </div>
    )
};

export default HelloWorld;
