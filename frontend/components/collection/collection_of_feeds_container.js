import {connect} from 'react-redux';
import FeedsIndex from '../feeds/feeds_index';
import {fetchAllFeeds} from '../../actions/feed_actions';


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
    feeds: collection
  });
};

const mapDispatchToProps = dispatch => ({
  // fetchAllFeeds: () => dispatch(fetchAllFeeds())
});


export default connect(mapStateToProps, mapDispatchToProps)(FeedsIndex);
