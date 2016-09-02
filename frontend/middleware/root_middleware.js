import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import FeedMiddleware from './feed_middleware';
import CategoryMiddleware from './category_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FeedMiddleware,
  CategoryMiddleware
);

export default RootMiddleware;
