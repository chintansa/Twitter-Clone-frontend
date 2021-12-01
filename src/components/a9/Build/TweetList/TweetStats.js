/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {useDispatch} from "react-redux";
import {likeTweet} from "../../../../services/twitterServicea9";
const TweetStats = ({tweet}) => {
    const dispatch = useDispatch();

    const likeClickHandler = () => {
        const updatedTweet = tweet;
        
        if(updatedTweet.liked === false){
            updatedTweet.stats.likes = updatedTweet.stats.likes + 1;
            updatedTweet.liked = true;
        }
        else {
            updatedTweet.stats.likes = updatedTweet.stats.likes - 1;
            updatedTweet.liked = false;
        }

        likeTweet(dispatch, updatedTweet);
    };
    return (<div className="row mt-2">
        <div className="col">
            <i className="far fa-comment me-2"></i>
            {tweet.stats.comments}
        </div>
        <div className="col">
            <i className="fas fa-retweet me-2"></i>
            {tweet.stats.retweets}
        </div>
        <div className="col" onClick={likeClickHandler}>
            {
                tweet.liked &&
                <i className="fas fa-heart me-2"
                   style={{color: tweet.liked ? "red": "white"}}></i>
            }
            {
                !tweet.liked &&
                <i className="far fa-heart me-2"></i>
            }
            {tweet.stats.likes}
        </div>
        <div className="col">
            <i className="fas fa-external-link-alt me-2"></i>
        </div>
    </div>)
}

export default TweetStats;