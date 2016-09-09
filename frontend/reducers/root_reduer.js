import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import FeedReducer from './feed_reducer';
import CategoryReducer from './category_reducer';
import CollectionReducer from './collection_reducer';
import FavoriteReducer from './favorite_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  feeds: FeedReducer,
  categories: CategoryReducer,
  collections: CollectionReducer,
  favorites: FavoriteReducer
});


export default RootReducer;
