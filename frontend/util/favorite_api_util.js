export const fetchAllFavorites = (success) => (
  $.ajax({
    method: 'GET',
    url: 'api/favorites',
    success,
    error: () => console.log('error in fetchAllFavorites')
  })
);

export const deleteFavorite = (favorite, success ) => {

  return (
  $.ajax({
    method: 'DELETE',
    url: `api/favorites/${favorite.id}`,
    success,
    error: () => console.log('error in deleteFavorite')
  })
);
};

export const addFavorite = (favorite, success ) => {
  return (
  $.ajax({
    method: 'POST',
    url: 'api/favorites',
    data: favorite,
    success,
    error: () => console.log('error in addFavorite')
  })
);
};
