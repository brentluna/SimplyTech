import {CollectionFeedConstants} from '../actions/collection_feed_actions';
import {deleteCollectionFeed, createCollectionFeed} from '../util/collection_feed_api_util';

const CollectionFeedMiddleware = store => next => action => {

  switch (action.type) {
    case CollectionFeedConstants.CREATE_COLLECTION_FEED:
      let createFeed = {feed_id: action.feedId, collection_id: action.collectionId};
      let createSuccess = () => console.log('createCollectionFeed success');
      createCollectionFeed(createFeed, createSuccess);
      return next(action);

    case CollectionFeedConstants.DELETE_COLLECTION_FEED:
      let deleteFeed = {feed_id: action.feedId, collection_id: action.collectionId};
      let deleteSuccess = () => console.log('deleteCollectionFeed success');
      deleteCollectionFeed(deleteFeed, deleteSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default CollectionFeedMiddleware;
