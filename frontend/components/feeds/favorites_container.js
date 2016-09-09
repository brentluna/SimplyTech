import FeedsIndex from './feeds_index';
import {connect} from 'react-redux';
import {fetchAllCollections} from '../../actions/collection_actions';
import {addFavorite, removeFavorite} from '../../actions/favorite_action';
const mapStateToProps = state => {
  let favObj = {};
  if (Object.keys(state.favorites).length) {
    let entries = [];
    for (let idx in state.favorites) {
      let favorite = state.favorites[idx];
      entries.push(favorite);
    }
    let newObj = {entries};
    favObj = {newObj};
  }
  return ({
    state: state,
    feeds: favObj,
    favs: true
  });
};

const mapDispatchToProps = dispatch => ({
  fetchAllCollections: () => dispatch(fetchAllCollections()),
  addFavorite: favorite => dispatch(addFavorite(favorite)),
  removeFavorite: favorite => dispatch(removeFavorite(favorite))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedsIndex);
