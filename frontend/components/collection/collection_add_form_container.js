import {connect} from 'react-redux';
import CollectionAddForm from './collection_add_form';
import {updateCollection, addCollection, fetchAllCollections} from '../../actions/collection_actions';
import {createCollectionFeed, deleteCollectionFeed} from '../../actions/collection_feed_actions';


const mapStateToProps = state => ({
  collections: state.collections
});

const mapDispatchToProps = dispatch => ({
  createCollectionFeed: (collectionId, feedId) => dispatch(createCollectionFeed(collectionId, feedId)),
  deleteCollectionFeed: (collectionId, feedId) => dispatch(deleteCollectionFeed(collectionId, feedId)),
  addCollection: title => dispatch(addCollection(title)),
  fetchAllCollections: () => dispatch(fetchAllCollections())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionAddForm);
