import {connect} from 'react-redux';
import CollectionIndex from './collection_index';
import {fetchAllFeeds} from '../../actions/feed_actions';

const mapStateToProps = state => ({
  collections: state.collections,
  loggedIn: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchAllFeeds: () => dispatch(fetchAllFeeds())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionIndex);
