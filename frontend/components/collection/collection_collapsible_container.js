import {connect} from 'react-redux';
import CollectionCollapsible from './collection_collapsible';
import {fetchAllCollections} from '../../actions/collection_actions';
import {fetchAllFeeds} from '../../actions/feed_actions';

const mapStateToProps = state => ({
  collections: state.collections,
  feeds: state.feeds
});

const mapDispatchToProps = dispatch =>({
  fetchAllCollections: () => dispatch(fetchAllCollections()),
  fetchAllFeeds: () => dispatch(fetchAllFeeds())
});


export default connect(mapStateToProps, mapDispatchToProps)(CollectionCollapsible);
