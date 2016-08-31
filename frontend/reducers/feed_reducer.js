import {FeedConstants} from '../actions/feed_actions';
import {merge} from 'lodash';


const defaultState = {

};
const FeedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FeedConstants.RECEIVE_ALL_FEEDS:
      return merge({},  action.feeds);

    case FeedConstants.RECEIVE_SINGLE_FEED:
      debugger
      return merge({}, {1: action.feed});

    default:
      return state;
  }
};

export default FeedReducer;
