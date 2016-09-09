export const fetchAllCollections = (success) => (
  $.ajax({
    method: 'GET',
    url: 'api/collections',
    success,
    error: () => console.log('error in fetchAllCollections#api')
  })
);

export const fetchSingleCollection = (id, success) => (
  $.ajax({
    method: 'GET',
    url: `api/collections/${id}`,
    success,
    error: () => console.log('error in fetchSingleCollection')
  })
);


export const updateCollection = (id, collection, success) => (
  $.ajax({
    method: 'PATCH',
    url: `api/collections/${id}`,
    data: collection,
    success,
    error: () => console.log('error in updatCollection')
  })
);

export const deleteCollection = (id, success) => (
  $.ajax({
    method: 'DELETE',
    url: `api/collections/${id}`,
    success,
    error: () => console.log('error in deleteCollection')
  })
);

export const addCollection = (collection, success) => {

  return (
  $.ajax({
    method: 'POST',
    url: 'api/collections',
    data: {collection: collection},
    success,
    error: () => console.log('error in addCollection')
  })

);
};
