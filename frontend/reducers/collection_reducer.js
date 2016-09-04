import {CollectionConstants} from '../actions/collection_actions';
import {merge} from 'lodash';



const defaultState = {}

const CollectionReducer = (state = defaultState, action ) => {
  switch (action.type) {
    case CollectionConstants.RECEIVE_ALL_COLLECTIONS:
      return merge({}, state, action.collections);

    case CollectionConstants.RECEIVE_SINGLE_COLLECTION:
      return merge({}, action.collection);
    default:
      return state;
  }
}

export default CollectionReducer;
