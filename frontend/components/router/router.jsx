import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from '../app';
import SplashContainer from '../splash/splash_container';
import FeedsIndexContainer from '../feeds/feeds_index_container';
import CategoryIndexContainer from '../category/category_index_container';
import {fetchAllFeeds} from '../../actions/feed_actions';
import { fetchAllCategories} from '../../actions/category_actions';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    // this.fetchFeedsOnEnter = this.fetchFeedsOnEnter.bind(this);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._categories = this._categories.bind(this);
  }


  _redirectIfLoggedIn(nextState, replace) {
    if (this.props.currentUser) {
      replace('/feeds');
    }
  }

  _ensureLoggedIn(store) {
    return (nextState, replace) => {
      if (!this.props.currentUser) {
      replace('/');
      } else {
        store.dispatch(fetchAllFeeds());
      }
    };
  }

  _categories(store) {
    return (nextState, replace) => {
      console.log('fetching catagories');
      if (!this.props.currentUser) {
      replace('/');
      } else {
        store.dispatch(fetchAllCategories());
      }
    };
  }

  render() {

    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SplashContainer} onEnter={this._redirectIfLoggedIn}/>
          <Route path='/feeds' component={FeedsIndexContainer} onEnter={this._ensureLoggedIn(store)}/>
          <Route path='/categories' component={CategoryIndexContainer} onEnter={(this._categories(store))}/>
        </Route>

      </Router>
    );
  }
}

export default AppRouter;
