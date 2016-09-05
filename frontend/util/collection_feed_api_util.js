
export const createCollectionFeed = (data, success) => (
  $.ajax({
    method: 'POST',
    url: 'api/collection_feeds',
    data: {collection_feed: data},
    success,
    error: () => console.log('error in createCollectionFeed')
  })
);


export const deleteCollectionFeed =(data, success) => (
  $.ajax({
    method: 'DELETE',
    url: `api/collection_feeds/${data.collection_id}`,
    data: {collection_feed: data},
    success,
    error: () => console.log('error in delete CollectionFeed')
  })
);
