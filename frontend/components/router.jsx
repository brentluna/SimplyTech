import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import SplashContainer from './splash/splash_container';
import FeedsIndexContainer from './feeds/feeds_index_container';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SplashContainer} />
          {/* <Route path='/login' component={SplashContainer} /> */}
          <Route path='/feeds' component={FeedsIndexContainer} />
        </Route>

      </Router>
    );
  }
}

export default AppRouter;
