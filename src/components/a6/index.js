
import HelloWorld from "./HelloWorld";
import Practice from './Practice/index';
import {BrowserRouter, Route} from "react-router-dom";
import Build from './Build/index';
import HomeScreen from './Build/HomeScreen/HomeScreen';
const A6 = () => {
  return (
    <BrowserRouter>
    <div className="container">

    <Route path= "/a6/hello" exact={true}>
          <HelloWorld/>
    </Route>
    <Route path={["/a6,", "/a6/practice"]}exact={true}>
          <Practice/>
    </Route>

    <Route path="/a6/twitter/explore" exact={true}>
            <Build/>
    </Route>
   
    <Route path= "/a6/twitter/home" exact={true} >
            <HomeScreen/>
    </Route>

    </div>
    </BrowserRouter>
  );
}

export default A6;
