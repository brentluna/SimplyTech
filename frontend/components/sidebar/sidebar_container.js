import {connect} from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';
import {fetchAllCategories} from '../../actions/category_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllCategories: () => dispatch(fetchAllCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
