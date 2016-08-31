import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import FeedMiddleware from './feed_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FeedMiddleware
);

export default RootMiddleware;
