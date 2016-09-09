export const FavoriteConstants = {
  FETCH_ALL_FAVORITES: 'FETCH_ALL_FAVORITES',
  FETCH_SINGLE_FAVORITE: 'FETCH_SINGLE_FAVORITE',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'DELETE_FAVORITE',
  RECEIVE_ALL_FAVORITES: 'RECEIVE_ALL_FAVORITES',
  RECEIVE_SINGLE_FAVORITE: 'RECEIVE_SINGLE_FAVORITE'
};

export const fetchAllFavorites = () => ({
  type: FavoriteConstants.FETCH_ALL_FAVORITES
});

export const fetchSingleFavorite = id => ({
  type: FavoriteConstants.FETCH_SINGLE_FAVORITE,
  id
});

export const addFavorite = favorite => ({
  type: FavoriteConstants.ADD_FAVORITE,
  favorite
});

export const removeFavorite = favorite => ({
  type: FavoriteConstants.REMOVE_FAVORITE,
  favorite
});

export const receiveAllFavorites = favorites => ({
  type: FavoriteConstants.RECEIVE_ALL_FAVORITES,
  favorites
});

export const receiveSingleFavorite = favorite => ({
  type: FavoriteConstants.RECEIVE_SINGLE_FAVORITE,
  favorite
});
