import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import FeedReducer from './feed_reducer';
import CategoryReducer from './category_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  feeds: FeedReducer,
  categories: CategoryReducer
});


export default RootReducer;
