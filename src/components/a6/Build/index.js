import {React} from 'react';
import {Route} from "react-router-dom";

import ExploreScreen from './ExploreScreen/ExploreScreen';


const Build = () => {
    return(
        <>
      
        
        <Route path="/a6/twitter/explore" exact={true}>
           <ExploreScreen/>
        </Route>
        

        </>

    )
};
export default Build;




