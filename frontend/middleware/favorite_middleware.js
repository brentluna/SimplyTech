import {FavoriteConstants, receiveAllFavorites, receiveSingleFavorite, removeFavorite} from '../actions/favorite_action';

import {fetchAllFavorites, fetchSingleFavorite, addFavorite, deleteFavorite} from '../util/favorite_api_util';


const FavoriteMiddleware = store => next => action => {

  switch (action.type) {
    case FavoriteConstants.FETCH_ALL_FAVORITES:
      const allSuccess = favorites => store.dispatch(receiveAllFavorites(favorites));
      fetchAllFavorites(allSuccess);
      return next(action);

    case FavoriteConstants.FETCH_SINGLE_FAVORITE:
      const singleSuccess = favorite => store.dispatch(receiveSingleFavorite(favorite));
      fetchSingleFavorite(singleSuccess);
      return next(action);

    case FavoriteConstants.ADD_FAVORITE:
      const addSuccess = favorite => store.dispatch(receiveSingleFavorite(favorite));
      addFavorite({favorite: action.favorite}, addSuccess);
      return next(action);

    case FavoriteConstants.REMOVE_FAVORITE:
      const removeSuccess = favorites => store.dispatch(receiveAllFavorites(favorites));
      deleteFavorite(action.favorite, removeSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default FavoriteMiddleware;
