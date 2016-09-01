import {receiveCurrentUser, receiveErrors, SessionConstants} from '../actions/session_actions';

import { login, logout, signup } from '../util/session_api_util';
import {hashHistory} from 'react-router';

const SessionMiddleware = store => next => action => {

  const success = user => {
    store.dispatch(receiveCurrentUser(user));
    let interval = setInterval(() => {
      if (store.getState().session.currentUser)
        hashHistory.push('/feeds');
        clearInterval(interval);
    }, 50);
  };


  const logoutSuccess = () => {
    let interval = setInterval(() => {
      if (!store.getState().session.currentUser) {
        hashHistory.push('/');
        clearInterval(interval);
      }
    }, 50);
  };
  const error = xhr => store.dispatch(receiveErrors(xhr.responseJSON));

  switch (action.type) {
    case SessionConstants.LOGIN:
      login(action.user, success, error);
      return next(action);

    case SessionConstants.LOGOUT:
      // const logoutSuccess = () => hashHistory.push('/');
      logout(logoutSuccess);
      return next(action);
    case SessionConstants.SIGNUP:
      signup(action.user, success, error);
      return next(action);

    default:
      return next(action);
  }
};

export default SessionMiddleware;
