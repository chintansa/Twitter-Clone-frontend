/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import TweetListItem from "./TweetListItem";
import {fetchAllTweets} from "../../../../services/twitterServicea9";

const selectAllTweets = (state) => state.tweets.tweets;
const TweetList = () => {
    
    const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch))
    return(
        <ul className="list-group">
            {
                tweets.map(tweet =>
                    <TweetListItem tweet={tweet}/>
                )
            }
        </ul>
    )
};

export default TweetList;