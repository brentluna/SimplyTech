export const feedSearch = (data, success) => (
  $.ajax({
    method: 'GET',
    url: '/api/feeds/search',
    data: {query: data},
    success,
    error: () => console.log('error in searchAPI')
  })
);
