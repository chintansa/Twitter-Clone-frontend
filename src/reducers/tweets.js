/* eslint-disable no-unreachable */
import posts from './data/tweets.json';

const initialState = {
    tweets: posts
}

const tweets = (state = initialState, action) => {
    switch (action.type) {
        case 'fetch-all-tweets':
            return({
                tweets: action.tweets
            })
            break;

        case 'like-tweet':
            return ({
                tweets: state.tweets.map(tweet => {
                    if(tweet._id === action.tweet._id) {
                        if(tweet.liked === true) {
                            tweet.liked = false;
                            tweet.stats.likes--;
                        } else {
                            tweet.liked = true;
                            tweet.stats.likes++;
                        }
                        return tweet;
                    } else {
                        return tweet;
                    }
                })
            });
            break;

        case 'delete-tweet':
            return ({
                tweets: state.tweets.filter(tweet => tweet._id !== action.tweet._id)
            })
            break;

        case 'create-tweet':

            const tweet = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                ...action.tweet,
                "avatar-image": "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
                "logo-image": "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                },
            };
            return ({
                tweets: [
                    tweet,
                    ...state.tweets,
                ]
            });
            break;
        default:
            return(state);
    }
};

export default tweets;