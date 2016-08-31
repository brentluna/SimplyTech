import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import SplashContainer from './splash/splash_container';
import FeedsIndexContainer from './feeds/feeds_index_container';
import {fetchAllFeeds} from '../actions/feed_actions';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);

    this.fetchFeedsOnEnter = this.fetchFeedsOnEnter.bind(this);
  }


  fetchFeedsOnEnter(store) {
    return () => store.dispatch(fetchAllFeeds());
  }

  render() {

    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SplashContainer} />
          <Route path='/feeds' component={FeedsIndexContainer} onEnter={this.fetchFeedsOnEnter(this.props.store)}/>
        </Route>

      </Router>
    );
  }
}

export default AppRouter;
