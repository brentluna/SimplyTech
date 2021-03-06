import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import FeedMiddleware from './feed_middleware';
import CategoryMiddleware from './category_middleware';
import CollectionMiddleware from './collection_middleware';
import CollectionFeedMiddleware from './collection_feed_middleware';
import FavoriteMiddleware from './favorite_middleware';


const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FeedMiddleware,
  CategoryMiddleware,
  CollectionMiddleware,
  CollectionFeedMiddleware,
  FavoriteMiddleware
);

export default RootMiddleware;
