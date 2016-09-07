import {connect} from 'react-redux';
import FeedsIndex from './feeds_index';
import {fetchAllFeeds} from '../../actions/feed_actions';
import {fetchAllCollections} from '../../actions/collection_actions';

const feedSort = feeds => {
  let entries = [];
  for (let idx in feeds) {
    let feed = feeds[idx];
    entries.push(...feed.entries);
  }

  let sorted = entries.sort((a, b) => {
    if (a.published > b.published) {
      return 1;
    } else if (a.published < b.published) {
      return -1;
    } else {
      return 0;
    }
  });
  let sortedEntries = {entries: sorted};
  return {sortedEntries};
};


const mapStateToProps = (state, ownProps) => {
  let feedState = {};
  if (!Object.keys(state.feeds).length) {
    feedState = {};
  } else if (ownProps.params.feedId) {
    feedState = state.feeds[ownProps.params.feedId];
    feedState = {feedState};
  } else if (Object.keys(state.collections).length) {
    feedState = feedSort(state.collections);
  }

  return ({
    feeds: feedState,
    feedObjs: state.feeds,
    state: state
  });
};

const mapDispatchToProps = dispatch => ({
  fetchAllFeeds: () => dispatch(fetchAllFeeds()),
  fetchAllCollections: () => dispatch(fetchAllCollections())
});


export default connect(mapStateToProps, mapDispatchToProps)(FeedsIndex);
