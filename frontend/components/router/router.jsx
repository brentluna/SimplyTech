import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from '../app';
import SplashContainer from '../splash/splash_container';
import FeedsIndexContainer from '../feeds/feeds_index_container';
import CategoryItemDetailContainer from '../category/category_item_detail_container';
import CategoryIndexContainer from '../category/category_index_container';
import {fetchAllFeeds} from '../../actions/feed_actions';
import { fetchAllCategories, fetchSingleCategory} from '../../actions/category_actions';
import CollectionOfFeedsContainer from '../collection/collection_of_feeds_container';
import {fetchAllCollections} from '../../actions/collection_actions';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    // this.fetchFeedsOnEnter = this.fetchFeedsOnEnter.bind(this);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._categories = this._categories.bind(this);
    this._singleCategory = this._singleCategory.bind(this);
  }


  _redirectIfLoggedIn(nextState, replace) {
    if (this.props.currentUser) {
      replace('/feeds');
    }
  }

  // _ensureLoggedIn(store) {
  //   return (nextState, replace) => {
  //     if (!this.props.currentUser) {
  //     replace('/');
  //     } else {
  //       store.dispatch(fetchAllFeeds());
  //       store.dispatch(fetchAllCollections());
  //     }
  //   };
  // }

  _ensureLoggedIn(store) {
    return (nextState, replace) => {
      if (!this.props.currentUser) {
      replace('/');
      } else {

        if (!Object.keys(store.getState().feeds).length) {
          store.dispatch(fetchAllFeeds());
        }
        if (!Object.keys(store.getState().collections).length) {
          store.dispatch(fetchAllCollections());
        }
      }
    };
  }

  _categories(store) {
    return (nextState, replace) => {
      if (!this.props.currentUser) {
      replace('/');
      } else {
        store.dispatch(fetchAllCategories());
      }
    };
  }
  _singleCategory(store) {
    return (nextState, replace) => {
      if (!this.props.currentUser) {
      replace('/');
      } else {
        store.dispatch(fetchSingleCategory(nextState.params.id));
      }
    };
  }

  render() {

    return(
      <Router history={hashHistory}>
        <Route path='/' component={App} onEnter={this._ensureLoggedIn(store)}>
          <IndexRoute component={SplashContainer} onEnter={this._redirectIfLoggedIn}/>

          <Route path='/feeds'>
            <IndexRoute component={FeedsIndexContainer} />
            <Route path=':feedId' component={FeedsIndexContainer}/>
          </Route>

          <Route path='/categories' >
            <IndexRoute component={CategoryIndexContainer} onEnter={(this._categories(store))} />
            <Route path=':id' component={CategoryItemDetailContainer} onEnter={this._singleCategory(store)} />
          </Route>

          <Route path='/collections'>
            <IndexRoute component={CollectionOfFeedsContainer}/>
            <Route path=':collectionId' component={CollectionOfFeedsContainer} />
          </Route>
        </Route>

      </Router>
    );
  }
}

export default AppRouter;
