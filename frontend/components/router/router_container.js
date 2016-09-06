import {connect} from 'react-redux';
import AppRouter from './router';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  feeds: state.feeds,
  collections: state.collections
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
