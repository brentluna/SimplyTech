export const FeedConstants = {
  FETCH_ALL_FEEDS: 'FETCH_ALL_FEEDS',
  FETCH_SINGLE_FEED: 'FETCH_SINGLE_FEED',
  RECEIVE_ALL_FEEDS: 'RECEIVE_ALL_FEEDS',
  RECEIVE_SINGLE_FEED: 'RECEIVE_SINGLE_FEED'
};

export const receiveAllFeeds = feeds => ({
  type: FeedConstants.RECEIVE_ALL_FEEDS,
  feeds
});

export const receiveSingleFeed = feed => ({
  type: FeedConstants.RECEIVE_SINGLE_FEED,
  feed
});

export const fetchAllFeeds = () => ({
  type: FeedConstants.FETCH_ALL_FEEDS
});
