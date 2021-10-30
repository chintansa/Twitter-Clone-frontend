import './App.css';
import './vendors/bootstrap/bootstrap.min.css'
import HelloWorld from "./components/a6/HelloWorld";
import Practice from './components/a6/Practice/index';
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from './components/a6/Build/HomeScreen/HomeScreen';
import ExploreScreen from './components/a6/Build/ExploreScreen/ExploreScreen';
function App() {
  return (
    <BrowserRouter>
    <div className="container">

      <Route path="/a6/hello" exact={true}>
        <HelloWorld/>
      </Route>

      <Route path= {["/","/a6","/a6/practice"]} exact= {true} >
        <Practice/> 
      </Route>

      <Route path="/a6/twitter/home" exact={true}>
        <HomeScreen/>
      </Route>

      <Route path="/a6/twitter/explore" component={ExploreScreen}/>

    </div>
    </BrowserRouter>
  );
}

export default App;
