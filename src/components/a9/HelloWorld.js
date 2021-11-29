import React from "react";
import { Link } from 'react-router-dom'


const HelloWorld = () => {
    return(
       <div>
            <h1>Hello World!</h1>
          <Link to="/a9/practice">
              Practice
          </Link> |
          <Link to="/a9/twitter/home">
              Build
          </Link>

          

       </div>
    )
};

export default HelloWorld;
