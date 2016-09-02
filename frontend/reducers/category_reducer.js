import {CategoryConstants} from '../actions/category_actions';
import {merge} from 'lodash';

const defaultState = [];

const CategoryReducer = (state = defaultState, action ) => {

  switch (action.type) {
    case CategoryConstants.RECEIVE_SINGLE_FEED:
      return ({}, action.category);

    case CategoryConstants.RECEIVE_ALL_CATEGORIES:
      return ({}, action.categories);
    default:
      return state;
  }
};

export default CategoryReducer;
