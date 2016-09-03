export const CollectionConstants = {
  RECEIVE_ALL_COLLECTIONS: 'RECEIVE_ALL_COLLECTIONS',
  RECEIVE_SINGLE_COLLECTION: 'RECEIVE_SINGLE_COLLECTION',
  REMOVE_COLLECTION: 'REMOVE_COLLECTION',
  ADD_COLLECTION: 'ADD_COLLECTION',
  UPDATE_COLLECTION: 'UPDATE_COLLECTION'
};


export const receiveAllCollections = collections => ({
  type: CollectionConstants.RECEIVE_ALL_COLLECTIONS,
  collections
});

export const receiveSingleCollection = collection => ({
  type: CollectionConstants.RECEIVE_SINGLE_COLLECTION,
  collection
});

export const removeCollection = collection => ({
  type: CollectionConstants.REMOVE_COLLECTION,
  collection
});

export const addCollection = () => ({
  type: CollectionConstants.ADD_COLLECTION
})
