import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';


class AppRouter extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}/>

      </Router>
    );
  }
}

export default AppRouter;
