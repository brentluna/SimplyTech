import {receiveCurrentUser, receiveErrors, SessionConstants} from '../actions/session_actions';

import { login, logout, signup } from '../util/session_api_util';

const SessionMiddleware = store => next => action => {

  const success = user => store.dispatch(receiveCurrentUser(user));
  const error = xhr => store.dispatch(receiveErrors(xhr.responseJSON));

  switch (action.type) {
    case SessionConstants.LOGIN:
      login(action.user, success, error);
      return next(action);

    case SessionConstants.LOGOUT:
      logout(() => next(action));

    case SessionConstants.SIGNUP:
      signup(action.user, success, error);
      return next(action);

    default:
      return next(action);
  }
};

export default SessionMiddleware;
