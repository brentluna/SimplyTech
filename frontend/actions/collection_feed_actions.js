export const CollectionFeedConstants = {
  CREATE_COLLECTION_FEED: 'CREATE_COLLECTION_FEED',
  DELETE_COLLECTION_FEED: 'DELETE_COLLECTION_FEED'
};

export const createCollectionFeed = (collectionId, feedId) => ({
  type: CollectionFeedConstants.CREATE_COLLECTION_FEED,
  collectionId,
  feedId
});

export const deleteCollectionFeed = (collectionId, feedId) => ({
  type: CollectionFeedConstants.DELETE_COLLECTION_FEED,
  collectionId,
  feedId
});
