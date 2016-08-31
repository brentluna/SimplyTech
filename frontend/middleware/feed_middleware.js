import {FeedConstants, receiveAllFeeds, receiveSinglFeed} from '../actions/feed_actions';
import{ fetchAllFeeds, fetchSingleFeed } from '../util/feed_api_util';
import {hashHistory} from 'react-router';


const FeedMiddleware = store => next => action => {

  switch (action.type) {
    case FeedConstants.FETCH_ALL_FEEDS:
      fetchAllFeeds( data => store.dispatch(receiveAllFeeds(data)));
      return next(action);

    case FeedConstants.FETCH_SINGLE_FEED:
      fetchSingleFeed(store.dispatch(receiveSinglFeed(action.feed)));
      return next(action);
    default:
      return next(action);
  }
};

export default FeedMiddleware;
