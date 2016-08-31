export const fetchAllFeeds = (success) => (
  $.ajax({
    method: "GET",
    url: 'api/feeds',
    success,
    error: () => console.log('error fetchAllFeeds#apiUtil')
  })
);

export const fetchSingleFeed = (id, success) => (
  $.ajax({
    method: 'GET',
    url: `api/feeds/${id}`,
    success,
    error: () => console.log('error fetchSingleFeed#apiUtil')
  })
);
