import {React} from 'react';
import { Route} from "react-router-dom";

import ExploreScreen from './ExploreScreen/ExploreScreen';
import HomeScreen from './HomeScreen/HomeScreen'
import who from "../../../reducers/who";
import tweets from "../../../reducers/tweetsN";
import profile from "../../../reducers/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ProfileScreen from './ProfileScreen/index';
import EditProfileScreen from './ProfileScreen/EditProfileScreen';

const reducer = combineReducers({tweets: tweets, who, profile: profile})
const store = createStore(reducer);

const Build = () => {
    return(
           
        <Provider store={store}>
            <div>
                <Route path={["/", "/a9/twitter/home"]}
                        exact={true} component={HomeScreen}/>
                <Route path="/a9/twitter/explore"
                        exact={true} component={ExploreScreen}/>
                <Route path="/a9/twitter/profile"
                        exact={true} component={ProfileScreen}/>
                <Route path="/a9/twitter/profile/editProfile"
                        exact={true} component={EditProfileScreen}/>
            </div>
        </Provider>
       

    );
};
export default Build;

