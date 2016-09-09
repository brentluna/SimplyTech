import {connect} from 'react-redux';
import CollectionIndexItem from './collection_index_item';
import {fetchAllCollections} from '../../actions/collection_actions';

const mapStateToProps = state => ({
  collections: state.collections,
  feeds: state.feeds,
  favs: false
});

const mapDispatchToProps = dispatch =>({
  fetchAllCollections: () => dispatch(fetchAllCollections())
});


export default connect(mapStateToProps, mapDispatchToProps)(CollectionIndexItem);
