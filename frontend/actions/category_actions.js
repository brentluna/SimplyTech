export const CategoryConstants = {
  RECEIVE_ALL_CATEGORIES: 'RECEIVE_ALL_CATEGORIES',
  RECEIVE_SINGLE_CATEGORY: 'RECEIVE_SINGLE_CATEGORY',
  FETCH_ALL_CATEGORIES: 'FETCH_ALL_CATEGORIES',
  FETCH_SINGLE_CATEGORY: 'FETCH_SINGLE_CATEGORY'
};

export const receiveSingleCategory = (category) => ({
  type: CategoryConstants.RECEIVE_SINGLE_CATEGORY,
  category
});

export const receiveAllCategories = (categories) => ({
    type: CategoryConstants.RECEIVE_ALL_CATEGORIES,
    categories
});

export const fetchAllCategories = () => ({
      type: CategoryConstants.FETCH_ALL_CATEGORIES
});

export const fetchSingleCategory = (id) => ({
  type: CategoryConstants.FETCH_SINGLE_CATEGORY,
  id
});
