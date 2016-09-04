import {connect} from 'react-redux';
import CollectionIndex from './collection_index';

const mapStateToProps = state => ({
  collections: state.collections,
  loggedIn: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionIndex);
