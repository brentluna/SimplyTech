import {connect} from 'react-redux';
import CollectionAddForm from './collection_add_form';
import {updateCollection} from '../../actions/collection_actions';

const mapStateToProps = state => ({
  collections: state.collections
});

const mapDispatchToProps = dispatch => ({
  updateCollection: id => dispatch(updateCollection(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionAddForm);
