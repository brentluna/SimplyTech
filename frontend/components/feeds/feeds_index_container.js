import {connect} from 'react-redux';
import FeedsIndex from './feeds_index';
import {fetchAllFeeds} from '../../actions/feed_actions';
import {fetchAllCollections} from '../../actions/collection_actions';


const mapStateToProps = (state, ownProps) => {
  let feedState;
  if (!Object.keys(state.feeds).length) {
    feedState = {};
  } else if (ownProps.params.feedId) {
    feedState = state.feeds[ownProps.params.feedId];
    feedState = {feedState};
  } else {
    feedState = state.feeds;
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
