export const fetchAllCategories = (success) => (
  $.ajax({
    method: 'GET',
    url: '/api/categories',
    success,
    error: () => console.log('error in fetchAllCategories#api')
  })
);

export const fetchSingleCategory = (id, success) => (
  $.ajax({
    method: 'GET',
    url: `api/categories/${id}`,
    success,
    error: () => console.log('error in fetchSingleCategory#api')
  })
);
