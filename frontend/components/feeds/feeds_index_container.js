import {connect} from 'react-redux';
import FeedsIndex from './feeds_index';
import {fetchAllFeeds} from '../../actions/feed_actions';


const mapStateToProps = state => ({
  feeds: state.feeds
});

const mapDispatchToProps = dispatch => ({
  fetchAllFeeds: () => dispatch(fetchAllFeeds())
});


export default connect(mapStateToProps, mapDispatchToProps)(FeedsIndex);
