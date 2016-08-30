import {connect} from 'react-redxu';
import Splash from './splash';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.sesssion.currentUser)
});

const mapDispachToProps = dispatch => ({

});

export default (mapStateToProps, mapDispachToProps)(Splash);
