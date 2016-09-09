import {connect} from 'react-redux';
import {addFavorite} from '../../actions/favorite_action';
import FeedIndexItem from './feed_index_item';
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  addFavorite: favorite => dispatch(addFavorite(favorite))
});


export default connect(mapStateToProps, mapDispatchToProps)()
