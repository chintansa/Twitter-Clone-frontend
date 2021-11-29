import './App.css';
import './vendors/bootstrap/bootstrap.min.css'

import {BrowserRouter, Link, Route} from "react-router-dom";


import A7 from './components/a7';
import A6 from './components/a6';
import A8 from './components/a8';
// import A9 from './components/a9';


function App() {
  return (
    <BrowserRouter>
    <div className="container">

    {/* <Link to = "/a9/practice">
     Link to A9 
    </Link>
    <Route path={"/a9"}>
        <A9/>
    </Route>
    <br/> */}
     

    <Link to = "/a8/practice">
     Link to A8 
    </Link>
    <Route path={"/a8"}>
        <A8/>
    </Route>
    <br/>

    <Link to = "/a7/practice">
     Link to A7 
    </Link>
    <Route path={"/a7"}>
        <A7/>
    </Route>
    <br/>

    <Link to = "/a6/practice">
      Link to A6
    </Link>
    <Route path={"/a6"}>
        <A6/>
    </Route>

    </div>
    </BrowserRouter>
  );
}

export default App;


 /* <Route path= "/a7/hello" exact={true}>
          <HelloWorld/>
    </Route>
    <Route path={["/", "/a7", "/a7/practice"]}exact={true}>
          <Practice/>
    </Route>

    <Route path="/a7/twitter/explore" exact={true}>
            <Build/>
    </Route>
   
    <Route path= "/a7/twitter/home" exact={true} >
            <HomeScreen/>
    </Route> */