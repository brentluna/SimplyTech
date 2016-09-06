import {CollectionConstants, receiveAllCollections, receiveSingleCollection} from '../actions/collection_actions';
import {fetchAllCollections, fetchSingleCollection, addCollection} from '../util/collection_api_util';

const CollectionMiddleware = store => next => action => {

  switch (action.type) {
    case CollectionConstants.FETCH_ALL_COLLECTIONS:
      const allSuccess = collections => store.dispatch(receiveAllCollections(collections))
      fetchAllCollections(allSuccess);
      return next(action);

    case CollectionConstants.FETCH_SINGLE_COLLECTION:
        const singleSuccess = collection => store.dispatch(receiveSingleCollection(collection))
        fetchSingleCollection(action.id, singleSuccess);
        return next(action);

    case CollectionConstants.ADD_COLLECTION:
      const addSuccess = collection => store.dispatch(receiveSingleCollection(collection));
      addCollection({title: action.title}, addSuccess);
      return next(action);

    default:
      return next(action);
  }
};


export default CollectionMiddleware;
