import {CategoryConstants, receiveAllCategories, receiveSingleCategory} from '../actions/category_actions';
import {fetchSingleCategory, fetchAllCategories} from '../util/category_api_util';
import {hashHistory} from 'react-router';

const CategoryMiddleware = store => next => action => {
  switch (action.type) {
    case CategoryConstants.FETCH_ALL_CATEGORIES:
      const allSuccess = (categories) => {
        store.dispatch(receiveAllCategories(categories));
      };
      fetchAllCategories(allSuccess);
      return next(action);

    case CategoryConstants.FETCH_SINGLE_CATEGORY:
      const singleSuccess = category => store.dispatch(receiveSingleCategory(category));
      fetchSingleCategory(action.id,singleSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default CategoryMiddleware;
