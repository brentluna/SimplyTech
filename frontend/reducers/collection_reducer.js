import {CollectionConstants} from '../actions/collection_actions';
import {merge} from 'lodash';



const defaultState = {};

const CollectionReducer = (state = defaultState, action ) => {
  switch (action.type) {
    case CollectionConstants.RECEIVE_ALL_COLLECTIONS:
      let newObj = {};
      for (let idx in action.collections) {
        let collection = action.collections[idx];
        newObj[collection.id] = collection;
      }
      return merge({}, newObj);

    case CollectionConstants.RECEIVE_SINGLE_COLLECTION:
      return merge({}, state, {[action.collection.id]: action.collection});



    default:
      return state;
  }
};

export default CollectionReducer;
