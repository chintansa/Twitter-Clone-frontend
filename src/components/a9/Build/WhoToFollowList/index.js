import React,{useEffect,useState} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
// import {useDispatch,useSelector} from "react-redux";
import {fetchAllWho} from "../../../../services/whoService";

// const selectAllWho = (state) => state.who.who;

const WhoToFollowList = () => {
    // const who = useSelector(selectAllWho);
    // const dispatch = useDispatch();
    // useEffect(() => fetchAllWho(dispatch));

    const [who, setWhome] = useState([]);
    useEffect(() => fetchAllWho().then(who => setWhome(who))) ;

    return (
        <ul className="list-group">
            <li className="list-group-item fw-bold">
                Who to follow
            </li>
            {
                who.map(who => {
                    return(
                        <WhoToFollowListItem who={who}/>
                    );
                })
            }
        </ul>
    );
}

export default WhoToFollowList;