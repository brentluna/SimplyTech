import {createStore} from 'redux';
import RootMiddleware from '../middleware/root_middleware';
import RootReducer from '../reducers/root_reduer';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    RootMiddleware
  )
);

export default configureStore;
