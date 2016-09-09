import {FavoriteConstants} from '../actions/favorite_action';
import {merge} from 'lodash';
const defaultState = {};

const FavoriteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FavoriteConstants.RECEIVE_ALL_FAVORITES:
      let newObj = {};
      for (let idx in action.favorites) {
        let favorite = action.favorites[idx];
        newObj[favorite.id] = favorite;
      }
      return merge({}, newObj);

    case FavoriteConstants.RECEIVE_SINGLE_FAVORITE:
      return merge({}, state, {[action.favorite.id]: action.favorite});

    case FavoriteConstants.REMOVE_FAVORITE:
      let newObj2 = merge({}, state);
      delete newObj2[action.favorite.id];
      return newObj2;

    default:
      return state;
  }
};

export default FavoriteReducer;
