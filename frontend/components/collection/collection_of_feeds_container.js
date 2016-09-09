import {connect} from 'react-redux';
import FeedsIndex from '../feeds/feeds_index';
import {fetchAllFeeds} from '../../actions/feed_actions';
import {fetchAllCollections} from '../../actions/collection_actions';


const mapStateToProps = (state, ownProps) => {
  let collection;
  if(Object.keys(state.collections).length === 0) {
    collection = {};
  } else if (ownProps.params.collectionId) {
    collection = state.collections[ownProps.params.collectionId];
    collection = {collection};
  } else {
    collection = state.collections;
  }

  return ({
    // ownProps.params.collectionId

    feeds: collection,
    feedObjs: state.feeds,
    state: state,
    favs: false

  });
};

const mapDispatchToProps = dispatch => ({
  fetchAllFeeds: () => dispatch(fetchAllFeeds()),
  fetchAllCollections: () => dispatch(fetchAllCollections())
});


export default connect(mapStateToProps, mapDispatchToProps)(FeedsIndex);
