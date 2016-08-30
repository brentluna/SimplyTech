import {connect} from 'react-redux';
import Splash from './splash';

const mapStateToProps = state => {
  return ({
    loggedIn: Boolean(state.session.currentUser)
  });

};

// const mapDispachToProps = dispatch => ({
//
// });

export default connect(mapStateToProps, null)(Splash);
