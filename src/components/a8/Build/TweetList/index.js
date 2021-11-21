/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from "react";
import TweetListItem from "./TweetListItem";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {fetchAllTweets} from "../../../../services/twitterService";

const selectAllTweets = (state) => state.tweets.tweets;

const TweetList = () => {
    const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), [])
    return (
            <ul className="list-group">
            {
        tweets.map(tweet => {
            return(
            <TweetListItem tweet={tweet}/>
                );
        })
    }
            </ul>
);
}

export default TweetList;