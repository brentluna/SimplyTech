export const CollectionConstants = {
  RECEIVE_ALL_COLLECTIONS: 'RECEIVE_ALL_COLLECTIONS',
  RECEIVE_SINGLE_COLLECTION: 'RECEIVE_SINGLE_COLLECTION',
  REMOVE_COLLECTION: 'REMOVE_COLLECTION',
  ADD_COLLECTION: 'ADD_COLLECTION',
  UPDATE_COLLECTION: 'UPDATE_COLLECTION',
  FETCH_ALL_COLLECTIONS: 'FETCH_ALL_COLLECTIONS',
  FETCH_SINGLE_COLLECTION: 'FETCH_SINGLE_COLLECTION'
};


export const receiveAllCollections = collections => ({
  type: CollectionConstants.RECEIVE_ALL_COLLECTIONS,
  collections
});

export const receiveSingleCollection = collection => ({
  type: CollectionConstants.RECEIVE_SINGLE_COLLECTION,
  collection
});

export const removeCollection = id => ({
  type: CollectionConstants.REMOVE_COLLECTION,
  id
});

export const addCollection = () => ({
  type: CollectionConstants.ADD_COLLECTION
});

export const updateCollection = id => ({
  type: CollectionConstants.UPDATE_COLLECTION,
  id
});

export const fetchAllCollections = () => ({
  type: CollectionConstants.FETCH_ALL_COLLECTIONS
});

export const fetchSingleCollection = id => ({
  type: CollectionConstants.FETCH_SINGLE_COLLECTION,
  id
})
